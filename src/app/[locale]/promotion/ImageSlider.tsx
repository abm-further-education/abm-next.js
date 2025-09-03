'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImageSlider() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Fitness 관련 이미지들 (실제 이미지 경로로 수정 필요)
  const fitnessImages = [
    '/courses/fitness/prac_1.jpg',
    '/courses/fitness/prac_2.png',
    '/courses/fitness/prac_3.png',
    '/courses/fitness/prac_4.jpg',
    '/courses/fitness/prac_5.jpg',
    '/courses/fitness/prac_6.jpg',
    '/courses/fitness/prac_7.jpg',
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === fitnessImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? fitnessImages.length - 1 : selectedImage - 1
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
    <>
      <section className="flex flex-col items-center justify-center">
        <Swiper
          navigation
          modules={[Navigation, Autoplay, Scrollbar]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full mx-40 h-300 mt-30"
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
            1690: { slidesPerView: 6 },
          }}
          spaceBetween={20}
        >
          {fitnessImages.map((imagePath, index) => (
            <SwiperSlide key={index} className="relative">
              <div
                className="relative w-full h-300 overflow-hidden rounded-10 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={imagePath}
                  alt={`Fitness course image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
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
              src={fitnessImages[selectedImage]}
              alt={`Fitness course image ${selectedImage + 1}`}
              width={800}
              height={600}
              className="max-w-800 max-h-full object-contain"
              priority
            />

            {/* Image Counter */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-20 py-10 rounded-10">
              {selectedImage + 1} / {fitnessImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageSlider;
