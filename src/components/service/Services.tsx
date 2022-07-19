import { ButtonMain } from "../button/Button";

const img = [
  {
    id: 1,
    path: "https://technext.github.io/energen/images/offer-deal-1.jpg",
    title: "Book Treatment",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 2,
    path: "https://technext.github.io/energen/images/offer-deal-2.jpg",
    title: "Special Offer & Deal",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 3,
    path: "https://technext.github.io/energen/images/offer-deal-3.jpg",
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
                  <ButtonMain title="Đặt lịch" backgroundColor="success"/>
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
