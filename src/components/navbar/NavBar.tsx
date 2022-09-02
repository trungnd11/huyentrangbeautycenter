/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { rotateInDownLeft, zoomInUp } from "react-animations";
import logo from "../../static/imgs/logos/logo.png";
import MenuItem from "./MenuItem";
import { getServiceTypeStore } from "../../store/services/serviceTypeSelector";
import { ButtonMain } from "../button/Button";
import { getPhoneStore } from "../../store/phoneNumber/phoneNumberSelector";
import { getLocalStorage } from "../commom/function";

const zoomInAnimation = keyframes`${rotateInDownLeft}`;

const showMenuUser = keyframes`${zoomInUp}`;

const NavBarShow = styled.div`
  animation: 0.6s ${zoomInAnimation};
`;

const MenuUser = styled.div`
  animation: 0.6s ${showMenuUser};
`;

export default function NavBar() {
  const serviceTypeStore = useSelector(getServiceTypeStore);
  const phoneNumberStore = useSelector(getPhoneStore);
  const [showNav, setShowNav] = useState(false);
  const [showNavHeader, setShowNavHeader] = useState(true);
  const [showMenuUser, setShowMenuUser] = useState(false);
  const navigation = useNavigate();

  const isUser:any = getLocalStorage("user");

  const handleNavigateServiceType = (typeId: string): void => {
    navigation(`/services/type-${typeId}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setShowNav(true);
        setShowMenuUser(false);
      }
      else {
        setShowNav(false);
      }
      window.scrollY < 240 && setShowNavHeader(true);
    });
  }, []);

  return (
    <div className="container-fluid p-0">
      {showNavHeader && (
        <div
          className="navHeader-container d-none d-lg-block shadow"
        >
          <div className="container">
            <div className="nav-header">
              <div className="contact">
                <h5>Gọi ngay để được tư vấn !!</h5>
                {!phoneNumberStore.loading &&
                  phoneNumberStore.phoneNumber.map((item) => (
                    <a
                      href={`tel:${item.phoneNumber}`}
                      key={item._id}
                      title={item.nameUser}
                    >
                      <p>
                        <i className="fa-solid fa-phone-flip phone pe-2"></i>0
                        {`${item.phoneNumber}`}
                      </p>
                    </a>
                  ))}
              </div>
              <div className="logo text-center">
                <img src={logo} alt="" />
                <h2>Huyen Trang Tran Beauty Center</h2>
                <p>Chất lượng tạo nên thịnh vượng</p>
              </div>
              <div className="services text-end">
                {isUser ? (
                  <div className="userLogin mx-1">
                    <img
                      src={JSON.parse(isUser).avatar}
                      alt=""
                      onClick={() => setShowMenuUser(!showMenuUser)}
                    />
                    <span
                      className="text-white"
                      onClick={() => setShowMenuUser(!showMenuUser)}
                    >
                      {JSON.parse(isUser).username}
                    </span>
                    {showMenuUser && (
                      <MenuUser className="menu-user shadow">
                        <div className="header-user text-center py-2">
                          <p className="mb-0">{JSON.parse(isUser).username}</p>
                          <img
                            src={JSON.parse(isUser).avatar}
                            alt=""
                            className="avatar-circle"
                          />
                          <p className="mb-0">{JSON.parse(isUser).username}</p>
                        </div>
                        <ul className="list-group text-start mt-2">
                          <li className="list-group-item">
                            <i className="fa-solid fa-gear pe-2"></i>Cài đặt tài
                            khoản
                          </li>
                          <li className="list-group-item">
                            <i className="fa-solid fa-face-grin-hearts pe-2"></i>
                            Dịch vụ của tôi
                          </li>
                          <li className="list-group-item text-danger">
                            <i className="fa-solid fa-circle-arrow-right pe-2"></i>
                            Đăng xuất
                          </li>
                        </ul>
                      </MenuUser>
                    )}
                  </div>
                ) : (
                  <>
                    <ButtonMain
                      className="mx-1 w-75"
                      title="Đăng nhập"
                      backgroundColor="danger"
                      click={() => navigation("login")}
                    />
                    <ButtonMain
                      className="mx-1 w-75 mt-3"
                      title="Dịch vụ"
                      backgroundColor="success"
                      click={() => navigation("services")}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="list-menu">
            <div className="container">
              <ul className="position-relative d-flex justify-content-between align-items-center">
                <MenuItem title="Trang chủ" path="/home" />
                <MenuItem title="Giới thiệu" path="/about" />
                <MenuItem title="Dịch vụ" path="/services" class="active" />
                <div className="sub-serviceType">
                  <ul className="list-serviceType">
                    {!serviceTypeStore.loading &&
                      serviceTypeStore.serviceType.map((item) => (
                        <li
                          key={item._id}
                          className="item-serviceType"
                          onClick={() => handleNavigateServiceType(item._id)}
                        >
                          {item.serviceType}
                        </li>
                      ))}
                  </ul>
                </div>
                <MenuItem title="Chuyên gia" path="/expert" />
                <MenuItem title="Blog" path="/blog" />
                <MenuItem title="Liên hệ" path="/contact" />
              </ul>
            </div>
          </div>
        </div>
      )}
      {showNav && (
        <NavBarShow className="nav-bar d-none d-lg-block">
          <div className="container h-100">
            <div className="nav-bar-title d-flex justify-content-between align-items-center h-100">
              <div className="logo d-flex align-items-center">
                <div className="logo-wapper d-flex justify-content-center align-items-center">
                  <img src={logo} alt="" />
                </div>
                <NavLink to={`/`}>
                  <h3>Huyen Trang Beauty Center</h3>
                </NavLink>
              </div>
              <div className="list-menu">
                <ul className="position-relative d-flex justify-content-between align-items-center">
                  <MenuItem title="Trang chủ" path="/home" />
                  <MenuItem title="Giới thiệu" path="/about" />
                  <MenuItem title="Dịch vụ" path="/services" class="active" />
                  <div className="sub-serviceType">
                    <ul className="list-serviceType">
                      {!serviceTypeStore.loading &&
                        serviceTypeStore.serviceType.map((item) => (
                          <li
                            key={item._id}
                            className="item-serviceType"
                            onClick={() => handleNavigateServiceType(item._id)}
                          >
                            {item.serviceType}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <MenuItem title="Chuyên gia" path="/expert" />
                  <MenuItem title="Blog" path="/blog" />
                  <MenuItem title="Liên hệ" path="/contact" />
                </ul>
              </div>
            </div>
          </div>
        </NavBarShow>
      )}
    </div>
  );
}
