/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Carousel } from "3d-react-carousal";
import { NavLink } from "react-router-dom";
import { ButtonMain } from "../button/Button";
import { getBanners } from "../../api/banner";
import LoadingComponent from "../../assets/svg/LoadingComponent";

export default function Carousels() {
  const [slideBanners, setSlideBanners] = useState([
    <LoadingComponent width="60px" height="60px" />
  ]);
  const handleBannensImg = (res) => {
    const slides = res.map(item => (
      <>
        <img src={item.img} alt="1" />
        { item.title && item.content && <p className="content mb-0">
        <div className="title text-center">
          <h2>{ item.title }</h2>
        </div>
        <div className="description">
          <p className="text-center">{ item.content }</p>
        </div>
        <div className="button text-center">
          <NavLink to={`/services`}>
            <ButtonMain className="mx-1" title="Dịch vụ" backgroundColor="success"/>
          </NavLink>
          <NavLink to={`/contact`}>
            <ButtonMain className="mx-1" title="Liên hệ" backgroundColor="danger"/>
          </NavLink>
        </div>
      </p> }
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
      <Carousel slides={slideBanners} autoplay={true} />
    </div>
  );
}
