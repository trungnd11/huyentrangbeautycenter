import { useDispatch, useSelector } from "react-redux";
import HeaderPage from "../../components/header-page/HeaderPage";
import ItemService from "./ItemService";
import avatar1 from "../../static/imgs/avatar/avatar-1.jpg";
import { useEffect } from "react";
import ServiceType from "./ServiceType";
import { getServicesStore } from "../../store/services/servicesSelector";
import { fetServices } from "../../store/services/service";

export default function ServicePage() {
  const dispatch = useDispatch<any>();
  const serviceStore = useSelector(getServicesStore);

  useEffect(() => {
    document.title = "Huyen Trang - Dịch vụ";
    dispatch(fetServices());
  }, [dispatch]);

  return (
    <div className="services-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="Dịch vụ"
        link="/home"
        prePage="Trang chủ"
        currentPage="dịch vụ"
      />
      <div className="container container-service">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center title">Dịch vụ của chúng tôi</h3>
          </div>
        </div>
        <ServiceType />
        <div className="row">
          {!serviceStore.loading && serviceStore.filter.length === 0 ?
            serviceStore.services.map((item) => (
              <ItemService
                key={item._id}
                img={item.image || avatar1}
                title={item.name}
                content={item.description}
              />
          )) : serviceStore.filter.map((item) => (
              <ItemService
                key={item._id}
                img={item.image || avatar1}
                title={item.name}
                content={item.description}
              />
          ))}
        </div>
      </div>
    </div>
  );
}
