"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Container } from "@/components/Container";
import { gallery } from "@/constant/data.json";
import { GalleryImage } from "@/components/GalleryImage";
export const Gallery = () => {
  return (
    <Container id="gallery">
      <div>
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
      </div>
      <div className="mt-[50px]">
        <Carousel>
          {gallery.map((src, index) => (
            <GalleryImage src={src} key={index} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
};
