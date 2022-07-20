/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect } from "react";
import { ButtonMain } from "../../components/button/Button";
import HeaderPage from "../../components/header-page/HeaderPage";

export default function ContactPage() {

  return (
    <div className="contact-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="Liên hệ"
        link="/home"
        prePage="Trang chủ"
        currentPage="Liên hệ"
      />

      <div className="content">
        <div className="form">
          <div className="container my-5 ">
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-md-6 col-lg-5">
                <div className="contact">
                  <h3 className="title">Thông tin liên hệ</h3>
                  <p className="address">
                    <b>Địa chỉ:</b>
                    <span className="ms-2">
                      Số 656, tổ dân phố 2, Phổ Yên, Thái Nguyên
                    </span>
                  </p>
                  <p className="phone-number">
                    <b>Số điện thoại:</b>
                    <a href="#" className="ms-2">+ 1235 2355 98</a>
                  </p>
                  <p className="email">
                    <b>Email:</b>
                    <a href="#" className="ms-2">info@yoursite.com</a>
                  </p>
                  <p className="website">
                    <b>Website:</b>
                    <a href="#" className="ms-2">yoursite.com</a>
                  </p>
                </div>
              </div>
              <div className="col-12 colmd-6 col-lg-6">
                <form action="">
                  <div className="row">
                    <div className="col-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Tên bạn..."
                      />
                    </div>
                    <div className="col-6">
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
                        <option value="1">Skin care</option>
                        <option value="2">Brows</option>
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
                      <ButtonMain title="Gửi lời nhắn" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="map" style={{ height: "40vh", width: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2722761759937!2d105.8680948153891!3d21.418540379732168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31351f8792c838f1%3A0x9a18999d400b1b0d!2sHuy%E1%BB%81n%20Trang%20brows!5e0!3m2!1svi!2s!4v1657861317521!5m2!1svi!2s"
            width="100%"
            height="100%"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
