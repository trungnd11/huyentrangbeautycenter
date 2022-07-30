/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Carousel } from "3d-react-carousal";
import { NavLink } from "react-router-dom";
import { ButtonMain } from "../button/Button";
import { url } from ".././../routers/allRouter";
import { getBanners } from "../../api/banner";

export default function Carousels() {
  const [slideBanners, setSlideBanners] = useState([
    <div className="loading-carousel" />
  ]);
  const handleBannensImg = (res) => {
    const slides = res.map(item => (
      <>
        <img src={item.img} alt="1" />
        { item.title && item.content && <div className="content">
        <div className="title text-center">
          <h2>{ item.title }</h2>
        </div>
        <div className="description">
          <p className="text-center">{ item.content }</p>
        </div>
        <div className="button text-center">
          <NavLink to={`${url}/services`}>
            <ButtonMain className="mx-1" title="Dịch vụ" backgroundColor="success"/>
          </NavLink>
          <NavLink to={`${url}/contact`}>
            <ButtonMain className="mx-1" title="Liên hệ" backgroundColor="danger"/>
          </NavLink>
        </div>
      </div> }
      </>
    ));
    setSlideBanners(slides);
  }

  const fetBanners = async () => {
    try {
      const response = await getBanners();
      handleBannensImg(response.data);
    } catch (error) {
      console.log({ error });
    }
  }

  useEffect(() => {
    fetBanners();
  }, [])
  return (
    <div className="carousel">
      <Carousel slides={slideBanners} autoplay={true} interval={5000} />
    </div>
  );
}
