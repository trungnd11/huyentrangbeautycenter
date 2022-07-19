/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import banner1 from "../../static/imgs/banner/banner-1.jpg";
import { ButtonAnimate } from '../button/Button';
import { url } from "../../routers/allRouter";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const zoomInAnimation = keyframes`${zoomIn}`;

const ZoomDiv = styled.div`
  animation: .6s ${zoomInAnimation};
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

  const [imgShow, setImgShow] = useState();
  let slides = [
    <img src={banner1} alt="1"  onClick={() => handleClick(banner1)} />,
    <img src={`https://technext.github.io/energen/images/offer-deal-3.jpg`} alt="2" onClick={() => handleClick(`https://technext.github.io/energen/images/offer-deal-3.jpg`)} />,
    <img src={`https://technext.github.io/energen/images/offer-deal-2.jpg`} alt="3" onClick={() => handleClick(`https://technext.github.io/energen/images/offer-deal-2.jpg`)} />,
    <img src={`https://technext.github.io/energen/images/offer-deal-1.jpg`} alt="4" onClick={() => handleClick(`https://technext.github.io/energen/images/offer-deal-1.jpg`)} />,
  ];

  const handleClick = (src) => {
    setZoomImg({ show: true, src });
    setImgShow(false);
  }

  const onBtnPrevImg = (srcImg) => {
    const btnPrev = document.getElementById("btn-prev");
    slides.forEach((element, index) => {
      if (element.props.src === srcImg) {
        if (index !== 0) {
          setImgShow(slides[index - 1].props.src)
        }
        else {
          btnPrev.classList.add("disable");
        }
      }
    });
  }

  const onBtnNextImg = (srcImg) => {
    const btnNext = document.getElementById("btn-nexts");
    slides.forEach((element, index) => {
      if (element.props.src === srcImg) {
        if (index < slides.length - 1) {
          setImgShow(slides[index + 1].props.src);
        }
        else {
          btnNext.classList.add("disable");
        }
      }
    });
  }

  const ShowZoomImg = ({ src }) => {
    return (
      imgShow ? (
        <div className="showImgAnimate">
          <div className="zoomImg" onClick={() => setZoomImg({show: false, src: ""})} >
            <i className="fa-solid fa-xmark" title='Đóng' onClick={() => setZoomImg({show: false, src: ""})} />
            <img id="img-zoom" src={src} alt="1" />
          </div>
          <i id="btn-prev" className="fa-solid fa-angle-left btn-prev" onClick={() => onBtnPrevImg(src)} />
          <i id="btn-nexts" className="fa-solid fa-angle-right btn-nexts" onClick={() => onBtnNextImg(src)} />
        </div>
      ) : (
        <ZoomDiv>
          <div className="zoomImg" onClick={() => setZoomImg({show: false, src: ""})} >
            <i className="fa-solid fa-xmark" title='Đóng' onClick={() => setZoomImg({show: false, src: ""})} />
            <img id="img-zoom" src={src} alt="1" />
          </div>
          <i id="btn-prev" className="fa-solid fa-angle-left btn-prev" onClick={() => onBtnPrevImg(src)} />
          <i id="btn-nexts" className="fa-solid fa-angle-right btn-nexts" onClick={() => onBtnNextImg(src)} />
        </ZoomDiv>
      )
    );
  }

  useEffect(() => {
    onBtnNextImg();
    onBtnPrevImg();
  }, [zoomImg, imgShow]);

  return (
    <div className="gallery">
      { zoomImg.show && <ShowZoomImg src={imgShow || zoomImg.src} /> }
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
        <Link to={`${url}/photos`} className="btn-next text-center mt-3 d-block">
          <ButtonAnimate title="Xem thêm..." />
        </Link>
      </div>
    </div>
  )
}
