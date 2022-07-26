import { useEffect, useState } from "react";
import { Carousel } from "3d-react-carousal";
import { NavLink } from "react-router-dom";
import { ButtonMain } from "../button/Button";
import { url } from ".././../routers/allRouter";
import banner1 from "../../static/imgs/banner/banner-1.jpg";
import banner2 from "../../static/imgs/banner/banner-2.jpg";
import banner4 from "../../static/imgs/banner/banner-4.jpg";
import banner5 from "../../static/imgs/banner/banner-5.jpg";
import banner6 from "../../static/imgs/banner/banner-6.jpg";
import { getMesengerHeader } from ".././../api/mesengerHeader";

let slides = [
  <img src={banner1} alt="banner-1" />,
  <img src={banner2} alt="banner-2" />,
  <img src={banner4} alt="banner-4" />,
  <img src={banner5} alt="banner-5" />,
  <img src={banner6} alt="banner-6" />,
];

export default function Carousels() {
  const [mesenger, setMesenger] = useState({
    title: String,
    content: String
  });
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

  useEffect(() => {
    fetMesenger();
  }, [])
  return (
    <div className="carousel">
      <Carousel slides={slides} autoplay={true} interval={5000} />
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
