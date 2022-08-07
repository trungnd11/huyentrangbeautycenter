/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetAddress } from "../../store/address/address";
import { getAddressStore } from "../../store/address/addressSelector";
import { fetPhone } from "../../store/phoneNumber/phoneNumber";
import { getPhoneStore } from "../../store/phoneNumber/phoneNumberSelector";
import { getServiceTypeStore } from "../../store/services/serviceTypeSelector";

export default function Footer() {
  const dispatch = useDispatch<any>();
  const addressStore = useSelector(getAddressStore);
  const phoneNumberStore = useSelector(getPhoneStore);
  const serviceTypeStore = useSelector(getServiceTypeStore);
  const { address, loading } = addressStore;
  const detailPage = useNavigate();

  const handleNavigateServiceType = (typeId: string): void => {
    detailPage(`/services/type-${typeId}`);
  };

  useEffect(() => {
    dispatch(fetAddress());
    dispatch(fetPhone());
  }, [dispatch]);

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 pe-0 pe-lg-3 footer-layout">
            <div className="company">
              <h3>Huyen Trang Tran Beauty Center</h3>
              <div className="address">
                {!loading &&
                  address.map((item, index) => (
                    <React.Fragment key={item._id}>
                      <p className={`${index === 0 && "mb-0 mt-2"}`}>
                        <i className="fa-solid fa-circle-dot"></i>
                        {` ${item?.apartmentNumber}, ${item?.commune}, ${item?.district}, ${item?.conscious} `}
                      </p>
                    </React.Fragment>
                  ))}
              </div>
              <div className="phone">
                {!phoneNumberStore.loading &&
                  phoneNumberStore.phoneNumber.map((item) => (
                    <a
                      href={`tel:${item.phoneNumber}`}
                      key={item._id}
                      title={item.nameUser}
                    >
                      <p>
                        <i className="fa-solid fa-phone-flip phone"></i>0
                        {`${item.phoneNumber}`}
                      </p>
                    </a>
                  ))}
              </div>
              <div className="social">
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-messenger"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 footer-layout">
            <div className="sevices">
              <h3>Dịch vụ</h3>
              <ul>
                {!serviceTypeStore.loading &&
                  serviceTypeStore.serviceType.map((item) => (
                    <a
                      href="#"
                      key={item._id}
                      title={item.description}
                      onClick={() => handleNavigateServiceType(item._id)}
                    >
                      <li>{item.serviceType}</li>
                    </a>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 footer-layout">
            <div className="location">
              <h3>Vị trí</h3>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2722761759937!2d105.8680948153891!3d21.418540379732168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31351f8792c838f1%3A0x9a18999d400b1b0d!2sHuy%E1%BB%81n%20Trang%20brows!5e0!3m2!1svi!2s!4v1657861317521!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="mb-0 mt-2 text-center text-white copy-right">
              Copyright ©
              <script>document.write(new Date().getFullYear());</script>2022 All
              rights by{" "}
              <Link to={`/`} className="title">
                Huyen Trang Beauty Center
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
