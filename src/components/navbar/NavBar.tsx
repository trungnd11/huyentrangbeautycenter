/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../static/imgs/logos/logo.png";

export default function NavBar() {
  return (
    <div className="container-fluid p-0">
      <div className="nav-bar">
        <div className="container h-100">
          <div className="nav-bar-title d-flex justify-content-between align-items-center h-100">
            <div className="logo d-flex align-items-center">
              <div className="logo-wapper d-flex justify-content-center align-items-center">
                <img src={logo} alt="" />
              </div>
              <a href="#">
                <h3>Huyen Trang Beauty Center</h3>
              </a>
            </div>
            <div className="list-menu">
              <ul className="d-flex justify-content-between align-items-center">
                <a href="#" className="item mx-3">
                  <li>Trang chủ</li>
                </a>
                <a href="#" className="item mx-3">
                  <li>Giới thiệu</li>
                </a>
                <a href="#" className="item mx-3">
                  <li>Dịch vụ</li>
                </a>
                <a href="#" className="item mx-3">
                  <li>Chuyên gia</li>
                </a>
                <a href="#" className="item mx-3">
                  <li>Blog</li>
                </a>
                <a href="#" className="item mx-3">
                  <li>Liên hệ</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
