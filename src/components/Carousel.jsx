import React, { useState, useEffect } from "react";
import {
  CarouselContainer,
  ImageCarousel,
  ImageContainer,
  ArrowButtonLeft,
  ArrowButtonRight
} from "../stylesComponents/carousel.style";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import img1 from "../assets/images/banner/baner-1.jpeg";
import img2 from "../assets/images/banner/baner-2.jpeg";

const image = [
  img1, img2
];

export default function Carousel() {

  const [imageIndex, setImageIndex] = useState(0);
  const [next, setNext] = useState(false);
  const [imagSrc, setImageSrc] = useState("");

  const nextImage = () => {
    setImageIndex((prevIndex) => prevIndex + 1);
    setNext(true);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) => prevIndex - 1);
    setNext(false);
  }

  useEffect(() => {
    setImageSrc(image[imageIndex]);
    const id = setInterval(() => {
      imageIndex === image.length - 1 ? prevImage()
      : nextImage();
    }, 5000);
    return () => clearInterval(id);
  }, [imageIndex])

  return (
    <CarouselContainer>
      {imageIndex !== 0 &&
        <ArrowButtonLeft onClick={prevImage}>
          <MdKeyboardArrowLeft />
        </ArrowButtonLeft>
      }
      {imagSrc === image[imageIndex] &&
        <ImageContainer next={next}>
          <ImageCarousel src={image[imageIndex]}></ImageCarousel>
        </ImageContainer>
      }
      {imageIndex !== image.length - 1 &&
        <ArrowButtonRight onClick={nextImage}>
          <MdKeyboardArrowRight />
        </ArrowButtonRight>
      }
    </CarouselContainer>
  );
}
