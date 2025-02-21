"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaSync } from "react-icons/fa";

// Array of image paths from the public/images folder
const imagesList = [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
    // add more images as needed
  
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
  // Using a ref to count the total images shown
  const countRef = useRef(0);
  const intervalRef = useRef(null);
  const router = useRouter();

  // Function to start the cycle after the button is clicked
  const startRandomImage = () => {
    // Reset counter and display the first image immediately
    countRef.current = 1;
    setCurrentImage(getRandomImage());

    // Clear any existing interval to avoid duplicates
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Set up the interval to change the image every 6 seconds
    intervalRef.current = setInterval(() => {
      countRef.current++;
      if (countRef.current > 7) {
        // Stop after 7 images and navigate back to home
        clearInterval(intervalRef.current);
        router.push("/");
      } else {
        setCurrentImage(getRandomImage());
      }
    }, 6000);
  };

  // Clean up the interval when the component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={startRandomImage}
        className="mb-8 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 flex items-center space-x-2 transition-colors duration-300"
      >
        <FaSync className="text-xl" />
        <span>Start Random Image</span>
      </button>
      {currentImage && (
        <div className="w-96 h-96 relative border rounded overflow-hidden shadow-md">
          <Image
            src={currentImage}
            alt="Random display"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
}
