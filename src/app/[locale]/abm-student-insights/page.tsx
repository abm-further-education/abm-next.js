'use client';

import Banner from '@/components/common/Banner';
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

function StudentInsightsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Testimonial images array
  const testimonialImages = Array.from({ length: 19 }, (_, i) => i + 1);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === testimonialImages.length ? 1 : selectedImage + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 1 ? testimonialImages.length : selectedImage - 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  return (
    <div>
      <Banner
        slides={[
          {
            imgPath: '/home/testimonial.png',
            title: 'A Glimpse into Student Experiences',
            content: '',
          },
        ]}
        dimmed={
          <div className="bg-neutral-900/40 w-full h-screen md:h-700 absolute z-10" />
        }
      />

      {/* Testimonial Grid Section */}
      <section className="px-16 md:px-0 my-60 md:my-80">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-80">
            <h2 className="text-3xl md:text-4xl font-bold mb-30 font-[family-name:var(--font-montserrat)]">
              Student Testimonials
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover what our students have to say about their experience at
              ABM
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
            {testimonialImages.map((imageNumber) => (
              <div
                key={imageNumber}
                className="relative group cursor-pointer overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => openModal(imageNumber)}
              >
                <Image
                  src={`/testimonials/${imageNumber}.png`}
                  alt={`Student testimonial ${imageNumber}`}
                  width={300}
                  height={250}
                  className="w-full h-200 md:h-250 object-cover"
                  priority={imageNumber <= 8}
                />
                <div className="absolute inset-0 bg-black/20 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <p className="text-sm font-semibold">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-20 right-20 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-20 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-20 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/testimonials/${selectedImage}.png`}
              alt={`Student testimonial ${selectedImage}`}
              width={800}
              height={600}
              className="max-w-600 max-h-full object-contain"
              priority
            />

            {/* Image Counter */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-20 py-10">
              {selectedImage} / {testimonialImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentInsightsPage;
