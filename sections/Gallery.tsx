"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Container } from "@/components/Container";
import { gallery } from "@/constant/data.json";
import { GalleryImage } from "@/components/GalleryImage";
import { useEffect, useState } from "react";

export const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("gallery");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="relative py-24 sm:py-32 overflow-hidden" id="gallery">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`mx-auto max-w-2xl text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Gallery
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-6 mb-12" />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take a virtual tour of our facility and services
            </p>
          </div>

          <div
            className={`mt-16 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative rounded-2xl bg-white shadow-2xl overflow-hidden">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                showArrows={true}
                showIndicators={true}
                className="max-w-5xl mx-auto"
                renderArrowPrev={(clickHandler, hasPrev) =>
                  hasPrev && (
                    <button
                      onClick={clickHandler}
                      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-300 flex items-center justify-center"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  )
                }
                renderArrowNext={(clickHandler, hasNext) =>
                  hasNext && (
                    <button
                      onClick={clickHandler}
                      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-300 flex items-center justify-center"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )
                }
              >
                {gallery.map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-[16/9] overflow-hidden"
                  >
                    <GalleryImage src={src} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
