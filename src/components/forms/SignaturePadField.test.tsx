import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import SignaturePadField from './SignaturePadField';

vi.mock('react-signature-canvas', () => {
  const MockSignatureCanvas = React.forwardRef(
    (
      props: {
        onEnd?: () => void;
        canvasProps?: React.ComponentProps<'canvas'>;
      },
      ref,
    ) => {
      React.useImperativeHandle(ref, () => ({
        isEmpty: () => false,
        clear: vi.fn(),
        getTrimmedCanvas: () => ({
          toDataURL: () => 'data:image/png;base64,fake-signature',
        }),
      }));

      return (
        <button type="button" onClick={props.onEnd}>
          Mock signature canvas
        </button>
      );
    },
  );

  MockSignatureCanvas.displayName = 'MockSignatureCanvas';

  return {
    default: MockSignatureCanvas,
  };
});

describe('SignaturePadField', () => {
  it('stores a signature data URL after drawing ends', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <SignaturePadField
        label="Signature"
        value=""
        onChange={handleChange}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Mock signature canvas' }));

    expect(handleChange).toHaveBeenCalledWith('data:image/png;base64,fake-signature');
  });
});
