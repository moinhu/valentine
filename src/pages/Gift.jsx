import { useEffect, useState } from "react";

import p1 from "../assets/photos/p1.jpg";
import p2 from "../assets/photos/p2.jpg";
import p3 from "../assets/photos/p3.jpg";
import p4 from "../assets/photos/p4.jpg";
import p5 from "../assets/photos/p5.jpg";
import p6 from "../assets/photos/p6.jpg";

const photos = [p1, p2, p3, p4, p5, p6];

export default function Gift() {
  const [current, setCurrent] = useState(0);

  // auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      
      {/* Slider */}
      <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] overflow-hidden rounded-2xl shadow-xl">
        {photos.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="memory"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
              ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
          />
        ))}
      </div>

      {/* Text */}
      <div className="mt-8 text-center">
        <p className="text-2xl font-semibold text-gray-900">
          I love you my life ❤️
        </p>
        <p className="mt-2 text-gray-600">
          Happy Valentine’s Day 🌹
        </p>
      </div>
    </div>
  );
}
