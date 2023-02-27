/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { OptionPage } from "../../model/component/PageModel";
import { fetServices, findServicesByServiceType } from "../../store/services/service";
import { fetServiceType } from "../../store/services/serviceType";
import { getServiceTypeStore } from "../../store/services/serviceTypeSelector";

function ServiceType(props: { optionPage: OptionPage | any, setOptionPage: React.Dispatch<React.SetStateAction<OptionPage>> }, ref: any) {
  const { optionPage, setOptionPage } = props;
  const dispatch = useDispatch<any>();
  const serviceTypeStore = useSelector(getServiceTypeStore);
  const { type } = useParams();
  const [activeType, setActiveType] = useState<string>(type || "all");

  const handleFilterServiceType = (typeService: string) => {
    setOptionPage((pre) => ({ ...pre, page: 0 }));
    dispatch(findServicesByServiceType({ type: typeService, optionPage }));
    setActiveType(typeService);
  }

  const handleAllServices = () => {
    setOptionPage((pre) => ({ ...pre, page: 0 }));
    setActiveType("all");
  };

  useImperativeHandle(
    ref,
    () => ({
      activeType
    }),
    [activeType]
  )

  useEffect(() => {
    dispatch(fetServiceType());
    if (activeType === "all") {
      dispatch(fetServices(optionPage));
      return;
    }
    if (type || activeType !== "all") {
      activeType && dispatch(findServicesByServiceType({ type: activeType, optionPage }));
    }
  }, [activeType, dispatch, optionPage, type]);

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

export default forwardRef(ServiceType)
