import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import banner1 from "../../static/imgs/banner/banner-1.jpg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export default function Gallery() {
  const [zoomImg, setZoomImg] = useState();
  let slides = [
    <img src={banner1} alt="1"  onClick={() => handleClick(banner1)} />,
    <img src="https://picsum.photos/800/501/?random" alt="2" onClick={() => handleClick(banner1)} />,
    <img src={banner1} alt="3" onClick={() => handleClick(banner1)} />,
    <img src="https://picsum.photos/800/504/?random" alt="4" onClick={() => handleClick(banner1)} />,
  ];

  const handleClick = (src) => {
    setZoomImg(true);
    console.log({ src });
  }

  const ShowZoomImg = (src) => {
    return (
      <div className="zoomImg">
        <img src={src} alt="1" />
      </div>
    );
  }

  return (
    <div className="gallery">
      { zoomImg && <ShowZoomImg /> }
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
          <div className="btn btn-success">
            Xem thêm...
          </div>
        </div>
      </div>
    </div>
  )
}
