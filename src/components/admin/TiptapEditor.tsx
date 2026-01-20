'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import { useEffect, useRef, useState, useCallback } from 'react';

// R2 이미지를 위한 커스텀 Image extension
const R2Image = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      src: {
        default: null,
      },
    };
  },
  renderHTML({ HTMLAttributes }) {
    const src = HTMLAttributes.src;

    // R2 keyPath인 경우 (http:// 또는 https://로 시작하지 않는 경우)
    // 렌더링 시 동적으로 URL을 가져오기 위해 data-key 속성 사용
    if (src && !src.startsWith('http://') && !src.startsWith('https://')) {
      return [
        'img',
        {
          ...HTMLAttributes,
          'data-r2-key': src,
          src: '/abm_logo.png', // placeholder 이미지
          class: 'r2-image max-w-full h-auto',
        },
      ];
    }

    return ['img', HTMLAttributes];
  },
});

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function TiptapEditor({
  content,
  onChange,
  placeholder = 'Write your news content here...',
}: TiptapEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const handleImageUploadRef = useRef<((file: File) => Promise<void>) | null>(
    null
  );

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
      R2Image.configure({
        inline: true,
        allowBase64: false,
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'border-collapse border border-gray-300 my-4',
        },
      }),
      TableRow.configure({
        HTMLAttributes: {
          class: 'border border-gray-300',
        },
      }),
      TableHeader.configure({
        HTMLAttributes: {
          class: 'border border-gray-300 bg-gray-100 font-bold p-2',
        },
      }),
      TableCell.configure({
        HTMLAttributes: {
          class: 'border border-gray-300 p-2',
        },
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] p-4',
      },
      handleDrop: (view, event, slice, moved) => {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files[0]
        ) {
          const file = event.dataTransfer.files[0];
          if (file.type.startsWith('image/')) {
            event.preventDefault();
            handleImageUploadRef.current?.(file);
            return true;
          }
        }
        return false;
      },
      handlePaste: (view, event) => {
        const items = Array.from(event.clipboardData?.items || []);
        for (const item of items) {
          if (item.type.startsWith('image/')) {
            event.preventDefault();
            const file = item.getAsFile();
            if (file) {
              handleImageUploadRef.current?.(file);
              return true;
            }
          }
        }
        return false;
      },
    },
  });

  const handleImageUpload = useCallback(
    async (file: File) => {
      if (!editor) return;

      // 이미지 파일인지 확인
      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드할 수 있습니다.');
        return;
      }

      setUploading(true);

      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload-image', {
          method: 'POST',
          body: formData,
          credentials: 'include',
        });

        // 응답이 성공하지 않으면 에러 처리
        if (!response.ok) {
          // Content-Type을 확인하여 JSON인지 판단
          const contentType = response.headers.get('content-type');
          let errorMessage = '이미지 업로드에 실패했습니다.';

          if (contentType && contentType.includes('application/json')) {
            // JSON 응답인 경우
            try {
              const data = await response.json();
              errorMessage = data.error || errorMessage;
            } catch {
              // JSON 파싱 실패 시 텍스트로 읽기
              const text = await response.text();
              errorMessage =
                text ||
                `서버가 ${response.status} ${response.statusText}를 반환했습니다.`;
            }
          } else {
            // JSON이 아닌 경우 텍스트로 읽기
            try {
              const text = await response.text();
              errorMessage =
                text ||
                `서버가 ${response.status} ${response.statusText}를 반환했습니다.`;
            } catch {
              errorMessage = `서버가 ${response.status} ${response.statusText}를 반환했습니다.`;
            }
          }

          throw new Error(errorMessage);
        }

        // 성공 응답은 JSON으로 파싱
        const data = await response.json();

        // 이미지 URL 처리 (상대 경로인 경우 절대 URL로 변환)
        let imageUrl = data.imagePath;

        // 상대 경로인 경우 (http:// 또는 https://로 시작하지 않는 경우)
        if (
          !imageUrl.startsWith('http://') &&
          !imageUrl.startsWith('https://')
        ) {
          // R2_PUBLIC_URL이 설정되어 있지 않으면 경고
          console.warn(
            'R2_PUBLIC_URL이 설정되지 않았습니다. 이미지가 표시되지 않을 수 있습니다.'
          );
          // 일단 경로를 그대로 사용 (나중에 R2_PUBLIC_URL 설정 필요)
          imageUrl = data.imagePath;
        }

        // 업로드된 이미지 URL을 에디터에 삽입
        editor.chain().focus().setImage({ src: imageUrl }).run();
      } catch (err) {
        console.error('Image upload error:', err);
        alert(
          err instanceof Error
            ? err.message
            : '이미지 업로드 중 오류가 발생했습니다.'
        );
      } finally {
        setUploading(false);
      }
    },
    [editor]
  );

  // handleImageUpload 함수를 ref에 저장
  useEffect(() => {
    handleImageUploadRef.current = handleImageUpload;
  }, [handleImageUpload]);

  function handleImageButtonClick() {
    fileInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
    // 같은 파일을 다시 선택할 수 있도록 reset
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  // R2 이미지 URL 로드 함수
  const loadR2Images = useCallback(() => {
    if (!editor) return;

    // 에디터 DOM 내에서만 검색
    const editorElement = editor.view.dom;
    const r2Images = editorElement.querySelectorAll('img[data-r2-key]');

    r2Images.forEach((img) => {
      const key = img.getAttribute('data-r2-key');
      if (key && !img.getAttribute('data-loading')) {
        img.setAttribute('data-loading', 'true');
        // placeholder 이미지 설정
        (img as HTMLImageElement).src = '/abm_logo.png';

        fetch(`/api/r2/get-url?key=${encodeURIComponent(key)}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.url) {
              (img as HTMLImageElement).src = data.url;
              img.removeAttribute('data-loading');
            } else {
              (img as HTMLImageElement).src = '/abm_logo.png';
              img.removeAttribute('data-loading');
            }
          })
          .catch((err) => {
            console.error('R2 image URL fetch error:', err);
            (img as HTMLImageElement).src = '/abm_logo.png';
            img.removeAttribute('data-loading');
          });
      }
    });
  }, [editor]);

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);

      // setContent 후 여러 번 시도하여 이미지 로드 (DOM이 완전히 렌더링될 때까지)
      const tryLoadImages = (attempt = 0) => {
        if (attempt < 5) {
          setTimeout(() => {
            loadR2Images();
            if (attempt < 4) {
              tryLoadImages(attempt + 1);
            }
          }, 200 * (attempt + 1));
        }
      };

      tryLoadImages();
    }
  }, [content, editor, loadR2Images]);

  // R2 이미지 URL 로드 (MutationObserver 사용)
  useEffect(() => {
    if (!editor) return;

    const editorElement = editor.view.dom;

    // MutationObserver로 DOM 변경 감지
    const observer = new MutationObserver(() => {
      loadR2Images();
    });

    // 에디터 DOM 감시 시작
    observer.observe(editorElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-r2-key'],
    });

    // 에디터 업데이트 후 R2 이미지 로드
    const handleUpdate = () => {
      setTimeout(loadR2Images, 200);
    };

    // 에디터 생성 후 초기 로드
    const handleCreate = () => {
      setTimeout(loadR2Images, 300);
    };

    // transaction 완료 후 이미지 로드
    const handleTransaction = () => {
      setTimeout(loadR2Images, 100);
    };

    editor.on('update', handleUpdate);
    editor.on('create', handleCreate);
    editor.on('transaction', handleTransaction);

    // 초기 로드
    setTimeout(loadR2Images, 500);

    return () => {
      observer.disconnect();
      editor.off('update', handleUpdate);
      editor.off('create', handleCreate);
      editor.off('transaction', handleTransaction);
    };
  }, [editor, loadR2Images]);

  if (!editor) {
    return null;
  }

  return (
    <div
      className="border border-gray-300 rounded-md overflow-hidde"
      id="news-content"
    >
      <div className="border-b border-gray-300 rounded-t-md bg-gray-50 p-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('bold')
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('italic')
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-3 py-1 rounded ${
            editor.isActive('heading', { level: 1 })
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          H1
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-3 py-1 rounded ${
            editor.isActive('heading', { level: 2 })
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('bulletList')
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          •
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('orderedList')
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          1.
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-1 rounded ${
            editor.isActive('blockquote')
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          &quot;
        </button>
        <button
          type="button"
          onClick={handleImageButtonClick}
          disabled={uploading}
          className={`px-3 py-1 rounded ${
            uploading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {uploading ? 'Uploading...' : 'Image'}
        </button>
        <button
          type="button"
          onClick={() => {
            if (!editor) return;
            try {
              // insertTable 명령이 있는지 확인
              if ('insertTable' in editor.commands) {
                editor
                  .chain()
                  .focus()
                  .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                  .run();
              } else {
                console.error(
                  'insertTable command is not available. Table extension may not be loaded.'
                );
              }
            } catch (error) {
              console.error('Error inserting table:', error);
            }
          }}
          className="px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100"
        >
          Table
        </button>
        {editor.isActive('table') && (
          <>
            <button
              type="button"
              onClick={() => editor.chain().focus().addColumnBefore().run()}
              className="px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100"
              title="Add column before"
            >
              +Col
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              className="px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100"
              title="Add column after"
            >
              Col+
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().deleteColumn().run()}
              className="px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100"
              title="Delete column"
            >
              -Col
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().addRowBefore().run()}
              className="px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100"
              title="Add row before"
            >
              +Row
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().addRowAfter().run()}
              className="px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100"
              title="Add row after"
            >
              Row+
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().deleteRow().run()}
              className="px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100"
              title="Delete row"
            >
              -Row
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().deleteTable().run()}
              className="px-3 py-1 rounded bg-white text-gray-700 hover:bg-gray-100"
              title="Delete table"
            >
              Del Table
            </button>
          </>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
