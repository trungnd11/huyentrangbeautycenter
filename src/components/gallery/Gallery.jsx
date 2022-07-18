import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import banner1 from "../../static/imgs/banner/banner-1.jpg";
import { ButtonAnimate } from '../button/Button';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const zoomInAnimation = keyframes`${zoomIn}`;

const ZoomDiv = styled.div`
  animation: 1s ${zoomInAnimation};
  position: fixed;
  background: #0000008b;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Gallery() {
  const [zoomImg, setZoomImg] = useState({
    show: false,
    src: ""
  });
  let slides = [
    <img src={banner1} alt="1"  onClick={() => handleClick(banner1)} />,
    <img src={banner1} alt="2" onClick={() => handleClick(banner1)} />,
    <img src={banner1} alt="3" onClick={() => handleClick(banner1)} />,
    <img src={banner1} alt="4" onClick={() => handleClick(banner1)} />,
  ];

  const handleClick = (src) => {
    setZoomImg({ show: true, src });
  }

  const onBtnPrevImg = (srcImg) => {
    console.log(srcImg);
    slides.forEach((element, index) => {
      if (element.props.src === srcImg) {
        index !== 0 && setZoomImg({ show: true, src: slides[index - 1].props.src })
      }
    });
  }

  const onBtnNextImg = (srcImg) => {
    slides.forEach((element, index) => {
      if (element.props.src === srcImg) {
        index < slides.length && setZoomImg({ show: true, src: slides[index + 1].props.src })
      }
    });
  }

  const ShowZoomImg = ({ src }) => {
    return (
      <ZoomDiv>
        <div className="zoomImg" onClick={() => setZoomImg({show: false, src: ""})} >
          <i class="fa-solid fa-xmark" title='Đóng' onClick={() => setZoomImg({show: false, src: ""})} />
          <img src={src} alt="1" />
        </div>
        <i className="fa-solid fa-angle-left btn-prev" onClick={() => onBtnPrevImg(src)} />
        <i className="fa-solid fa-angle-right btn-nexts" onClick={() => onBtnNextImg(src)} />
      </ZoomDiv>
    );
  }

  return (
    <div className="gallery">
      { zoomImg.show && <ShowZoomImg src={zoomImg.src} index /> }
      <div className="container">
        <div className="title">
          <h3 className="text text-center">
            Hình ảnh khách hàng
          </h3>
        </div>
        <div className="img">
          <AliceCarousel
            animationType='fadeout'
            autoPlay
            infinite
            animationDuration={3000}
            mouseTracking
            responsive={responsive}
            items={slides}
            autoPlayControls
          />
        </div>
        <div className="btn-next text-center mt-3">
          <ButtonAnimate title="Xem thêm..." />
        </div>
      </div>
    </div>
  )
}
