/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ButtonMain } from "../../components/button/Button";
import HeaderPage from "../../components/header-page/HeaderPage";
import spa from "../../static/imgs/spa/spa.jpg";
import { getAddressStore } from "../../store/address/addressSelector";
import { getPhoneStore } from "../../store/phoneNumber/phoneNumberSelector";
import { getServiceTypeStore } from "../../store/services/serviceTypeSelector";


export default function ContactPage() {
  const addressStore = useSelector(getAddressStore);
  const phoneNumberStore = useSelector(getPhoneStore);
  const serviceTypeStore = useSelector(getServiceTypeStore);
  const { address, loading } = addressStore;
  
  useEffect(() => {
    document.title = "Huyen Trang - Liên hệ";
  }, []);

  return (
    <div className="contact-page">
      <HeaderPage
        backgroud="https://firebasestorage.googleapis.com/v0/b/image-spa.appspot.com/o/banner%2Fbanner-5.jpg?alt=media&token=5ef21d11-2341-4379-b99a-1a17a14bf557"
        title="Liên hệ"
        link="/home"
        prePage="Trang chủ"
        currentPage="Liên hệ"
      />

      <div className="content">
        <div className="form">
          <div className="container my-5 ">
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-md-12 col-lg-5">
                <div className="contact">
                  <h3 className="title">Thông tin liên hệ</h3>
                  <p className="address">
                    <b>Địa chỉ:</b>
                    {!loading &&
                      address.map((item, index) => (
                        <React.Fragment key={item._id}>
                          <p className={`${index === 0 && "mb-0 mt-2"}`}>
                            <i className="fa-solid fa-circle-dot"></i>
                            {` ${item?.apartmentNumber}, ${item?.commune}, ${item?.district}, ${item?.conscious} `}
                          </p>
                        </React.Fragment>
                      ))}
                  </p>
                  <p className="phone-number mb-0">
                    <b>Số điện thoại:</b>
                    {!phoneNumberStore.loading &&
                      phoneNumberStore.phoneNumber.map((item, index) => (
                        <a
                          href={`tel:${item.phoneNumber}`}
                          key={item._id}
                          title={item.nameUser}
                        >
                          <p className={`${index === 0 && "mb-0 mt-2"}`}>
                            <i className="fa-solid fa-phone-flip phone"></i>0
                            {`${item.phoneNumber}`}
                          </p>
                        </a>
                      ))}
                  </p>
                  <p className="email">
                    <b>Email:</b>
                    <a href="#" className="ms-2">
                      info@yoursite.com
                    </a>
                  </p>
                  <p className="website">
                    <b>Website:</b>
                    <a href="#" className="ms-2">
                      yoursite.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <form action="">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Tên bạn..."
                      />
                    </div>
                    <div className="col-12 col-md-6 input-phone">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Số điện thoại..."
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <select
                        required
                        className="form-control"
                        placeholder="Chọn dịch vụ"
                      >
                        <option value="" disabled selected>
                          Chọn dịch vụ
                        </option>
                        {!serviceTypeStore.loading &&
                          serviceTypeStore.serviceType.map((item) => (
                            <option key={item._id} value={item._id}>{item.serviceType}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        placeholder="Viết lời nhắn của bạn..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <ButtonMain title="Gửi lời nhắn" type="button" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="container-fluid h-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2722761759937!2d105.8680948153891!3d21.418540379732168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31351f8792c838f1%3A0x9a18999d400b1b0d!2sHuy%E1%BB%81n%20Trang%20brows!5e0!3m2!1svi!2s!4v1657861317521!5m2!1svi!2s"
              width="100%"
              height="100%"
              loading="lazy"
            />
            <div className="spa-image">
              <img src={spa} alt="huyentrangspa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
