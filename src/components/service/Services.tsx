import { useNavigate } from "react-router-dom";
import { ButtonMain } from "../button/Button";
import { url } from "../../routers/allRouter";
import avatar1 from "../../static/imgs/avatar/avatar-1.jpg";

const img = [
  {
    id: 1,
    path: avatar1,
    title: "Book Treatment",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 2,
    path: avatar1,
    title: "Special Offer & Deal",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 3,
    path: avatar1,
    title: "Great Gift Packages",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const listServices = [
  {
    id: 1,
    title: "Aromatheraphy",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
  },
  {
    id: 2,
    title: "Skin Care",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
  },
  {
    id: 3,
    title: "Herbal Spa",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
  },
  {
    id: 4,
    title: "Body Massage",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
  },
];

export default function Services() {
  const detailPage = useNavigate();

  const handleClickDetailService = (): void => {
    detailPage(`${url}/service-details`);
  }

  return (
    <div className="services">
      <div className="container">
        <div className="row">
          {img.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="service">
                <div className="image">
                  <img src={item.path} alt="" />
                </div>
                <div className="description">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ButtonMain title="Chi tiết" backgroundColor="success" click={handleClickDetailService}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="list-services">
        <div className="container-fluid">
          <div className="row">
            {listServices.map((item) => (
              <div className="col-12 col-md-6 col-lg-3" key={item.id}>
                <div className="item-service">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-face-grin-hearts" />
                  </div>
                  <div className="description">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
