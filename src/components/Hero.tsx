import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-6">Precision Products</h1>
        <p className="hero-text text-xl md:text-2xl mb-8">Hope Driven, Quality Delivered</p>
        <button className="hero-text bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-opacity-90 transition-all">
          Explore Our Products
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};