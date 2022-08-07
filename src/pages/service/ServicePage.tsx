import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HeaderPage from "../../components/header-page/HeaderPage";
import ItemService from "./ItemService";
import avatar1 from "../../static/imgs/avatar/avatar-1.jpg";
import ServiceType from "./ServiceType";
import { getServicesStore } from "../../store/services/servicesSelector";
import { fetServices } from "../../store/services/service";
import LoadingComponent from "../../assets/svg/LoadingComponent";

export default function ServicePage() {
  const dispatch = useDispatch<any>();
  const serviceStore = useSelector(getServicesStore);
  const { type } = useParams();

  useEffect(() => {
    document.title = "Huyen Trang - Dịch vụ";
    !type && dispatch(fetServices());
  }, [dispatch, type]);

  return (
    <div className="services-page">
      <HeaderPage
        backgroud="https://firebasestorage.googleapis.com/v0/b/image-spa.appspot.com/o/banner%2Fbanner-5.jpg?alt=media&token=5ef21d11-2341-4379-b99a-1a17a14bf557"
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
          {!serviceStore.loading ? (
            serviceStore.services.map((item) => (
              <ItemService
                key={item._id}
                img={item.image || avatar1}
                title={item.name}
                content={item.description}
              />
            ))
          ) : (
            <div className="loading-services">
              <LoadingComponent width="60px" height="60px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
