import { Carousel } from "3d-react-carousal";
import { NavLink } from "react-router-dom";
import banner1 from "../../static/imgs/banner/banner-1.jpg";
import { ButtonMain } from "../button/Button";
import { url } from ".././../routers/allRouter"
let slides = [
  <img src={banner1} alt="1" />,
  <img src={banner1} alt="2" />,
  <img src={banner1} alt="3" />,
  <img src={banner1} alt="4" />,
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
