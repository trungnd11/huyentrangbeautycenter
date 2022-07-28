import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../static/imgs/logos/logo-m.png";
import MenuItem from "../navbar/MenuItem";
import { url } from "../../routers/allRouter";

export default function NavbarMobile() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigateHome = useNavigate();
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleNavigateHome = () => {
    navigateHome(`${url}/home`);
  }
  return (
    <>
      <div className={`navbar-mobile ${showMenu && "navbar-mobile-active"}`}>
        <div className="logo" onClick={handleNavigateHome}>
          <img src={logo} alt="logo" />
        </div>
        <div className="trademark">
          <h5 onClick={handleNavigateHome}>Huyen Trang Beauty Center</h5>
        </div>
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
      </div>
      <div
        className={`overlay-navbar ${showMenu && "overlay-navbar-active"}`}
        onClick={handleShowMenu}
      ></div>
    </>
  );
}
