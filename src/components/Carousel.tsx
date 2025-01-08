import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80",
    title: "Precision Engineering",
    subtitle: "Excellence in Every Component",
  },
  {
    image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&q=80",
    title: "Advanced Manufacturing",
    subtitle: "Leading Edge Technology",
  },
  {
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80",
    title: "Quality Assured",
    subtitle: "ISO 9001:2015 Certified",
  },
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: { opacity: 0, scale: 1.05 },
    center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slide Display */}
      <AnimatePresence>
        <motion.div
          key={current}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{slides[current].title}</h1>
            <p className="text-sm md:text-lg">{slides[current].subtitle}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Icon Buttons */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 p-3 rounded-full text-white hover:bg-black/50 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 p-3 rounded-full text-white hover:bg-black/50 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Tracker */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
