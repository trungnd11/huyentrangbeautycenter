import { useNavigate } from "react-router-dom";
import { ButtonMain } from "../button/Button";
import { url } from "../../routers/allRouter";
import avatar1 from "../../static/imgs/avatar/avatar-1.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServiceLimit } from "../../api/services";
import { getServiceTypeStore } from "../../store/services/serviceTypeSelector";
import { fetServiceType } from "../../store/services/serviceType";

interface Service {
  _id: string
  name: string;
  image: string;
  description: string;
}

export default function Services() {
  const detailPage = useNavigate();
  const [service, setService] = useState<Service[]>();
  const dispatch = useDispatch<any>();
  const servicesTypeStore = useSelector(getServiceTypeStore);

  const handleClickDetailService = (): void => {
    detailPage(`${url}/service-details`);
  }

  const fetServiceLimit = async () => {
    try {
      const services = await getServiceLimit(3);
      setService(services.data);
    } catch (error) {
      console.log({ error });
    }
  }


  useEffect(() => {
    fetServiceLimit();
    dispatch(fetServiceType());
  }, [dispatch])

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
            <div className="list-services-layout">
              {!servicesTypeStore.loading &&
                servicesTypeStore.serviceType.map((item) => (
                  <div className="item-service" key={item._id}>
                    <div className="icon d-flex justify-content-center align-items-center">
                      {item.image ? (
                        <img src={item.image} alt={item.serviceType} />
                      ) : (
                        <i className="fa-solid fa-face-grin-hearts" />
                      )}
                    </div>
                    <div className="description">
                      <h3>{item.serviceType}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
