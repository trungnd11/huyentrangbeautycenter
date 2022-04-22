import styled, { keyframes } from "styled-components";

const carouselHeight = "80vh";

const forwardImageAnimation = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const CarouselContainer = styled.div`
  width: 100vw;
  height: ${carouselHeight};
  border-radius: 3px;
  margin-top: -35px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${forwardImageAnimation} 1s ease;
`;

export const ImageCarousel = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ArrowButtonRight = styled.div`
  font-size: 2rem;
  position: absolute;
  right: 0;
  top: 50%;
  cursor: pointer;
`;

export const ArrowButtonLeft = styled.div`
  font-size: 2rem;
  position: absolute;
  left: 0;
  top: 50%;
  cursor: pointer; 
`;
