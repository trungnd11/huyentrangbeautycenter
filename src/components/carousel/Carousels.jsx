import { Carousel } from "3d-react-carousal";
import banner1 from "../../static/imgs/banner/banner-1.jpg";
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
          <button className="btn btn-primary">Dịch vụ</button>
          <button className="btn btn-success ms-2">Liên hệ</button>
        </div>
      </div>
    </div>
  );
}
