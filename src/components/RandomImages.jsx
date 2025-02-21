"use client";
import React, { useState } from "react";
import { FaSync } from "react-icons/fa";

// Array of image paths from the public/images folder
const imagesList = [
  "/images/image1.jpeg",
  "/images/image2.jpeg",
  "/images/image3.jpeg",
  "/images/image4.jpeg",
  "/images/image5.jpeg",
  "/images/image6.jpeg",
  "/images/image7.jpeg",
  "/images/image8.jpeg",
  "/images/image9.jpeg",
  "/images/image10.jpeg",
  "/images/image11.jpeg",
  "/images/image12.jpeg",
  "/images/image13.jpeg",
  "/images/image14.jpeg",
  "/images/image15.jpeg",
  "/images/image16.jpeg",
  "/images/image17.jpeg",
  "/images/image18.jpeg",
];

// Function to select a random image from the list
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imagesList.length);
  return imagesList[randomIndex];
};

export default function RandomImage() {
  const [currentImage, setCurrentImage] = useState(null);
  const [count, setCount] = useState(0);
  // Change the background image when the button is clicked
  const handleChangeImage = () => {
    setCurrentImage(getRandomImage());
    setCount(count+1);
    if(count == 7){
        setCurrentImage(null);
        setCount(0);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900"
      style={{
        backgroundImage: currentImage ? `url(${currentImage})` : "none",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for button clarity */}
      <div className="bg-black bg-opacity-50 p-4 rounded">
        <button
          onClick={handleChangeImage}
          className="my-3 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-500 flex items-center space-x-2 transition-colors duration-300"
        >
          <FaSync className="text-xl" />
        </button>
      </div>
    </div>
  );
}
