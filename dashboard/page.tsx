'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Sparkles, Zap, Shield } from 'lucide-react';
import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

// Hero Images Component
const HeroImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Built with Next.js for optimal performance"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Secure",
      description: "Enterprise-grade security built-in"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "Modern",
      description: "Cutting-edge technology stack"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-indigo-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-purple-500 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Feature showcase */}
      <div className="relative z-10 text-center max-w-sm mx-auto">
        <div className="transition-all duration-500 ease-in-out transform">
          <div className="flex justify-center mb-4">
            {features[currentSlide].icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {features[currentSlide].title}
          </h3>
          <p className="text-gray-600 text-sm">
            {features[currentSlide].description}
          </p>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Page Component
export default function Page() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-4 md:h-52 shadow-lg">
        <AcmeLogo />
      </div>
      
      {/* Main Content */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Left Content Panel */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-white/70 backdrop-blur-sm px-6 py-10 md:w-2/5 md:px-20 shadow-lg border border-white/20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong className="text-blue-600">Welcome to Acme.</strong> This is the example for the{' '}
            <a 
              href="https://nextjs.org/learn/" 
              className="text-blue-500 hover:text-blue-600 transition-colors underline decoration-2 underline-offset-2"
            >
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          
          <div className="flex flex-col gap-4">
            <Link
              href="/login"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex items-center gap-3 self-start rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:scale-105 md:text-base group"
            >
              <span>Log in</span>
              <ArrowRight className={`w-5 md:w-6 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Link>
            
            <Link
              href="/learn"
              className="flex items-center gap-3 self-start rounded-lg border-2 border-blue-500 bg-transparent px-6 py-3 text-sm font-medium text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg md:text-base"
            >
              <span>Learn more</span>
              <ChevronRight className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
        
        {/* Right Hero Images Panel */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div className="w-full h-80 md:h-96 rounded-lg shadow-lg">
            <HeroImages />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>© 2025 Acme Corporation. Built with Next.js and Tailwind CSS.</p>
      </div>
    </main>
  );
}
