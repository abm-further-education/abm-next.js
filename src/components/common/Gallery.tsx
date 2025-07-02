'use client';
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setOpen(true);
  };

  const handlePrev = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setSelectedImage(images[(imageIndex - 1 + images.length) % images.length]);
  };

  const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(imageIndex + 1) % images.length]);
  };

  const breakpointColumns = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="p-5 w-full">
      <h2 className="text-3xl md:text-4xl font-bold py-50 text-center">
        Campus Gallery
      </h2>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-6 h-max overflow-hidden"
        columnClassName="space-y-6"
      >
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden shadow-md">
            <Image
              width={300}
              height={300}
              src={src}
              alt={`Image ${index}`}
              className="cursor-pointer object-cover w-full hover:scale-105 transition-transform duration-300"
              onClick={() => handleImageClick(src)}
            />
          </div>
        ))}
      </Masonry>
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-75">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-12 right-12 text-white rounded-full"
          >
            <X />
          </button>
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
              className="max-w-full max-h-screen object-contain"
            />
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-50 transform -translate-y-1/2 p-2 text-white rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-50 transform -translate-y-1/2 p-2 text-white rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

const images = [
  '/campus/campus_1.png',
  '/campus/campus_2.png',
  '/campus/campus_3.png',
  '/campus/campus_4.png',
  '/campus/campus_5.png',
  '/campus/campus_6.png',
  '/campus/campus_7.png',
  '/campus/campus_8.png',
];
