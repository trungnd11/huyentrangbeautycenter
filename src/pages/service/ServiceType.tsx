/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { filterService } from "../../store/services/service";
import { fetServiceType } from "../../store/services/serviceType";
import { getServiceTypeStore } from "../../store/services/serviceTypeSelector";

export default function ServiceType() {
  const dispatch = useDispatch<any>();
  const serviceTypeStore = useSelector(getServiceTypeStore);
  

  const handleFilterServiceType = (typeService: string) => {
    dispatch(filterService(typeService));
  } 

  useEffect(() => {
    dispatch(fetServiceType());
  }, [dispatch])

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-12 col-lg-8">
        <div className="service-type">
          <ul className="type-item">
            <a onClick={() => dispatch(filterService(""))}>
              <li className="">Tất cả</li>
            </a>
            {!serviceTypeStore.loading &&
              serviceTypeStore.serviceType.map((item) => (
                <a
                  key={item._id}
                  onClick={() => handleFilterServiceType(item.serviceType)}
                >
                  <li>{item.serviceType}</li>
                </a>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
