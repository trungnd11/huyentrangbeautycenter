import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { flip } from "react-animations";
import { Author } from "../../enum/Enum";
import logo from "../../static/imgs/logos/logo.png";
import { getLoginStore, logout } from "../../store/user/login";
import { ButtonMain } from "../button/Button";
import { SweetAlertComfirm } from "../commom/alert/Alert";
import MenuItem from "../navbar/MenuItem";
import { MenuUser } from "../navbar/NavBar";

const showBrandName = keyframes`${flip}`;

const BrandName = styled.h5`
  animation: 4s 1s ${showBrandName};
`;

export default function NavbarMobile() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showMenuUser, setShowMenuUser] = useState(false);
  const navigateHome = useNavigate();
  const dispatch = useDispatch();
  const { login } = useSelector(getLoginStore);
  const [animateBrandName, setAnimateBrandName] = useState<boolean>(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
    setShowMenuUser(false);
  };

  const handleShowMenuUser = useCallback(
    () => {
      setShowMenuUser(pre => !pre);
      setShowMenu(false);
    },
    [],
  );

  const handleLogout = () => {
    SweetAlertComfirm("Đăng xuất", "Bạn có chắc chắn thoát tài khoản", () => {
      dispatch(logout(Author.USER));
      setShowMenuUser(false);
    });
  };

  const handleNavigateHome = () => {
    navigateHome(`/home`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateBrandName(pre => !pre);
    }, 5000)
    return () => clearTimeout(timer);
  }, [animateBrandName]);

  return (
    <>
      <div className={`navbar-mobile ${showMenu && "navbar-mobile-active"}`}>
        <div className="logo" onClick={handleNavigateHome}>
          <img src={logo} alt="logo" />
        </div>
        {login?.username ? (
          <div className="author-user">
            {animateBrandName && (
              <BrandName onClick={handleShowMenuUser}>
                Chào mừng {login?.username}
                <i
                  className="fa-solid fa-chevron-down ms-2"
                  style={{ fontSize: ".8rem", cursor: "pointer" }}
                />
              </BrandName>
            )}
            {showMenuUser && (
              <MenuUser className="menu-user shadow">
                <div className="header-user text-center py-2">
                  <p className="mb-0">{login.username}</p>
                  <img src={login.avatar} alt="" className="avatar-circle" />
                  <p className="mb-0">{login.username}</p>
                </div>
                <ul className="list-group text-start mt-2">
                  <li className="list-group-item">
                    <i className="fa-solid fa-gear pe-2"></i>Cài đặt tài khoản
                  </li>
                  <li className="list-group-item">
                    <i className="fa-solid fa-face-grin-hearts pe-2"></i>
                    Dịch vụ của tôi
                  </li>
                  <li
                    className="list-group-item text-danger"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-circle-arrow-right pe-2"></i>
                    Đăng xuất
                  </li>
                </ul>
              </MenuUser>
            )}
          </div>
        ) : (
          <div className="trademark">
            {animateBrandName && (
              <BrandName onClick={handleNavigateHome}>
                Huyen Trang Beauty Center
              </BrandName>
            )}
          </div>
        )}
        <div className="menu" onClick={handleShowMenu}>
          {!showMenu ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark icon-close"></i>
          )}
        </div>
      </div>
      <div
        className={`list-menu-mobile ${showMenu && "active-list-menu-mobile"}`}
        onClick={handleShowMenu}
      >
        <ul className="menu-wapper">
          <MenuItem title="Trang chủ" path="/home" />
          <MenuItem title="Giới thiệu" path="/about" />
          <MenuItem title="Dịch vụ" path="/services" />
          <MenuItem title="Chuyên gia" path="/expert" />
          <MenuItem title="Blog" path="/blog" />
          <MenuItem title="Liên hệ" path="/contact" />
        </ul>
        {!login?.username ? (
          <div className="text-center mt-2 mb-5">
            <ButtonMain
              className="mx-1"
              title="Đăng nhập"
              backgroundColor="danger"
              click={() => navigateHome("login")}
            />
            <ButtonMain
              style={{ width: "9rem" }}
              className="mx-1"
              title="Dịch vụ"
              backgroundColor="success"
              click={() => navigateHome("services")}
            />
          </div>
        ) : (
          <div className="trademark">
            <h5 className="text-center" onClick={handleNavigateHome}>
              <i className="fa-regular fa-heart me-2" />
              Huyen Trang Beauty Center
              <i className="fa-regular fa-heart ms-2" />
            </h5>
          </div>
        )}
      </div>
      <div
        className={`overlay-navbar ${showMenu && "overlay-navbar-active"}`}
        onClick={handleShowMenu}
      ></div>
    </>
  );
}
