/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetServices, findServicesByServiceType } from "../../store/services/service";
import { fetServiceType } from "../../store/services/serviceType";
import { getServiceTypeStore } from "../../store/services/serviceTypeSelector";

export default function ServiceType() {
  const dispatch = useDispatch<any>();
  const serviceTypeStore = useSelector(getServiceTypeStore);
  const [activeType, setActiveType] = useState<string>("all");
  const { type } = useParams();

  const handleFilterServiceType = (typeService: string) => {
    dispatch(findServicesByServiceType(typeService));
    setActiveType(typeService);
  }

  const handleAllServices = () => {
    dispatch(fetServices());
    setActiveType("all");
  };

  useEffect(() => {
    dispatch(fetServiceType());
    if (type) {
      dispatch(findServicesByServiceType(type));
      setActiveType(type);
    }
  }, [dispatch, type]);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-12 col-lg-8">
        <div className="service-type">
          <ul className="type-item">
            <a onClick={() => handleAllServices()}>
              <li className={activeType === "all" ? "activeType" : ""}>
                Tất cả
              </li>
            </a>
            {!serviceTypeStore.loading &&
              serviceTypeStore.serviceType.map((item) => (
                <a
                  key={item.id}
                  onClick={() => handleFilterServiceType(item.id)}
                >
                  <li className={activeType === item.id ? "activeType" : ""}>
                    {item.serviceType}
                  </li>
                </a>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
