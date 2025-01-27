"use client";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { team } from "@/constant/data.json";
import { useEffect, useState } from "react";

export const Team = () => {
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

    const element = document.getElementById("team");
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
    <div className="relative py-20 sm:py-32" id="team">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Team
            </h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
              Meet our experienced team of professionals dedicated to your
              well-being
            </p>
          </div>

          <div className="space-y-12">
            {team.cards.map((teammember, i) => (
              <div
                key={i}
                className={`transform transition-all duration-700 delay-${
                  i * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Card {...teammember} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
