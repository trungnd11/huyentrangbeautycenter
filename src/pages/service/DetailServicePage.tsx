import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import HeaderPage from "../../components/header-page/HeaderPage";
import { ItemServiceSLide } from "./ItemService";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const slides = [
  <ItemServiceSLide
    img="https://technext.github.io/energen/images/offer-deal-1.jpg"
    title="Book Your Treatment"
    content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    
  />,
  <ItemServiceSLide
    img="https://technext.github.io/energen/images/offer-deal-1.jpg"
    title="Book Your Treatment"
    content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    
  />,
  <ItemServiceSLide
    img="https://technext.github.io/energen/images/offer-deal-1.jpg"
    title="Book Your Treatment"
    content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    
  />,
  <ItemServiceSLide
    img="https://technext.github.io/energen/images/offer-deal-1.jpg"
    title="Book Your Treatment"
    content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    
  />,
];

export default function DetailServicePage() {

  return (
    <div className="service-detail-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="Dịch vụ"
        link="/home"
        prePage="Trang chủ"
        currentPage="dịch vụ"
        currentPageLink="/services"
        thirdPage="Chi tiết dịch vụ"
      />

      <div className="container container-detail-service">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h3 className="text-center">Book Your Treatment</h3>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                illo quas iure similique, possimus laudantium excepturi sequi
                necessitatibus ipsam nobis autem vitae, modi expedita nulla
                atque pariatur exercitationem tempore commodi!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                illo quas iure similique, possimus laudantium excepturi sequi
                necessitatibus ipsam nobis autem vitae, modi expedita nulla
                atque pariatur exercitationem tempore commodi!
              </p>
              <p>
                <img
                  src="https://technext.github.io/energen/images/image_1.jpg"
                  alt="1"
                />
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                illo quas iure similique, possimus laudantium excepturi sequi
                necessitatibus ipsam nobis autem vitae, modi expedita nulla
                atque pariatur exercitationem tempore commodi!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                illo quas iure similique, possimus laudantium excepturi sequi
                necessitatibus ipsam nobis autem vitae, modi expedita nulla
                atque pariatur exercitationem tempore commodi!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="orther-service">
              <h3 className="text-center orther-service-title">
                Các dịch vụ khác
              </h3>
              <div className="item-orther-sevice mt-4">
                <AliceCarousel
                  autoPlay
                  infinite
                  animationDuration={3000}
                  mouseTracking
                  responsive={responsive}
                  items={slides}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
