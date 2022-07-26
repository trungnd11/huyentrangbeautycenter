import { useNavigate } from "react-router-dom";
import { ButtonMain } from "../button/Button";
import { url } from "../../routers/allRouter";
import avatar1 from "../../static/imgs/avatar/avatar-1.jpg";
import { useEffect, useState } from "react";
import { getServiceLimit } from "../../api/services";

interface ServiceType {
  _id: string
  name: string;
  image: string;
  description: string;
}

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
  const [service, setService] = useState<ServiceType[]>();

  const handleClickDetailService = (): void => {
    detailPage(`${url}/service-details`);
  }

  const fetServiceLimit = async () => {
    try {
      const services = await getServiceLimit(3);
      setService(services.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetServiceLimit();
  }, [])

  return (
    <div className="services">
      <div className="container">
        <div className="row">
          {service &&
            service.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item._id}>
                <div className="service">
                  <div className="image">
                    <img src={avatar1 || item.image} alt="" />
                  </div>
                  <div className="description">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <ButtonMain
                      title="Chi tiết"
                      backgroundColor="success"
                      click={handleClickDetailService}
                    />
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
