"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import { Container } from "@/components/Container";

export const Gallery = () => {
  return (
    <Container>
      <div>
        <h2 className='text-3xl font-bold text-center'>Gallery</h2>
      </div>
      <div className="mt-[50px]">
        <Carousel>
          <div><Image src="/eg.jpg" alt="Hi" width={1240} height={1240} /></div>
          <div><Image src="/eg.jpg" alt="Hi" width={1240} height={1240} /></div>
          <div><Image src="/eg.jpg" alt="Hi" width={1240} height={1240} /></div>
          <div><Image src="/eg.jpg" alt="Hi" width={1240} height={1240} /></div>
        </Carousel>
      </div>
    </Container >
  );
};
