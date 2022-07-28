/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Carousel } from "3d-react-carousal";
import { NavLink } from "react-router-dom";
import { ButtonMain } from "../button/Button";
import { url } from ".././../routers/allRouter";
import { getMesengerHeader } from ".././../api/mesengerHeader";
import { getBanners } from "../../api/banner";
import banner1 from "../../static/imgs/banner/banner-1.jpg";


export default function Carousels() {
  const [mesenger, setMesenger] = useState({
    title: String,
    content: String
  });
  const [slideBanners, setSlideBanners] = useState([
    <img src={banner1} alt="1" />
  ]);
  const [isLoading, setIsLoading] = useState(true);

  const fetMesenger = async () => {
    try {
      const response = await getMesengerHeader();
      setMesenger(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
    }
  }

  const handleBannensImg = (res) => {
    const slides = res.map(item => <img src={item.img} alt="1" />);
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
    fetMesenger();
    fetBanners();
  }, [])
  return (
    <div className="carousel">
      <Carousel slides={slideBanners} autoplay={true} interval={5000} />
      {!isLoading && (
        <div className="content">
        <div className="title text-center">
          <h2>{ mesenger.title }</h2>
        </div>
        <div className="description">
          <p className="text-center">{ mesenger.content }</p>
        </div>
        <div className="button text-center">
          <NavLink to={`${url}/services`}>
            <ButtonMain className="mx-1" title="Dịch vụ" backgroundColor="success"/>
          </NavLink>
          <NavLink to={`${url}/contact`}>
            <ButtonMain className="mx-1" title="Liên hệ" backgroundColor="danger"/>
          </NavLink>
        </div>
      </div>
      ) }
    </div>
  );
}
