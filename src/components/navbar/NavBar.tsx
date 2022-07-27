/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../static/imgs/logos/logo.png";
import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";
import { url } from "../../routers/allRouter";
import { useSelector } from "react-redux";
import { getServiceTypeStore } from "../../store/services/serviceTypeSelector";

export default function NavBar() {  
  const serviceTypeStore = useSelector(getServiceTypeStore);
  return (
    <div className="container-fluid p-0">
      <div className="nav-bar d-none d-lg-block">
        <div className="container h-100">
          <div className="nav-bar-title d-flex justify-content-between align-items-center h-100">
            <div className="logo d-flex align-items-center">
              <div className="logo-wapper d-flex justify-content-center align-items-center">
                <img src={logo} alt="" />
              </div>
              <NavLink to={`${url}/`}>
                <h3>Huyen Trang Beauty Center</h3>
              </NavLink>
            </div>
            <div className="list-menu">
              <ul className="d-flex justify-content-between align-items-center">
                <MenuItem title="Trang chủ" path="/home" />
                <MenuItem title="Giới thiệu" path="/about" />
                <MenuItem title="Dịch vụ" path="/services" class="active">
                  <ul className="list-serviceType">
                    {!serviceTypeStore.loading &&
                      serviceTypeStore.serviceType.map((item) => (
                        <li className="item-serviceType">{ item.serviceType }</li>
                      ))}
                  </ul>
                </MenuItem>
                <MenuItem title="Chuyên gia" path="/expert" />
                <MenuItem title="Blog" path="/blog" />
                <MenuItem title="Liên hệ" path="/contact" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
