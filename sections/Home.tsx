"use client";
import { Container } from "@/components/Container";
import { useEffect, useState } from "react";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50/50 to-white"
    >
      <Container>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="block text-blue-600 mb-2">Saravana</span>
              <span className="block">Rehabilitation</span>
              <span className="block">Center</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto slide-up">
              A multimodal therapy center for children and adults with
              behavioural, cognitive, emotional, speech, communication and motor
              problems.
            </p>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto slide-up">
              We specialize in providing training and therapy for children and
              adults with neurodevelopmental disorders (autism spectrum
              disorder, learning disability, intellectual disability, attention
              deficit hyperactive disorder etc) and psychological problems
              (depression, anxiety, phobia, marital conflict etc.).
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Our Services
              </a>
              <a
                href="#team"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-900 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
