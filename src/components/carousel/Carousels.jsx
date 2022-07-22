import { Carousel } from "3d-react-carousal";
import { NavLink } from "react-router-dom";
import { ButtonMain } from "../button/Button";
import { url } from ".././../routers/allRouter";
import banner1 from "../../static/imgs/banner/banner-1.jpg";
import banner2 from "../../static/imgs/banner/banner-2.jpg";
import banner4 from "../../static/imgs/banner/banner-4.jpg";
import banner5 from "../../static/imgs/banner/banner-5.jpg";
import banner6 from "../../static/imgs/banner/banner-6.jpg";

let slides = [
  <img src={banner1} alt="banner-1" />,
  <img src={banner2} alt="banner-2" />,
  <img src={banner4} alt="banner-4" />,
  <img src={banner5} alt="banner-5" />,
  <img src={banner6} alt="banner-6" />,
];

export default function Carousels() {
  
  return (
    <div className="carousel">
      <Carousel slides={slides} autoplay={true} interval={5000} />
      <div className="content">
        {/* <div className="logo">
          <img src="" alt="" />
        </div> */}
        <div className="title text-center">
          <h2>Huyen Trang Spa &amp; beauty center</h2>
        </div>
        <div className="description">
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in, quibusdam est eius perferendis ipsum, similique exercitationem fuga error nostrum beatae deleniti consequatur recusandae impedit quas, illo autem. Esse, eaque?</p>
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
    </div>
  );
}
