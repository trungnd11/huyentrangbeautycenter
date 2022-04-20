import React, { useRef, useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  NavBarTitle,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../stylesComponents/NavBar.style";
import LogoImg from "../assets/images/logo/logo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <Logo src={LogoImg}></Logo>
            <NavBarTitle>Huyen Trang Beauty Center</NavBarTitle>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLink to="/"> Trang chủ</NavbarLink>
            <NavbarLink to="/products"> Dịch vụ</NavbarLink>
            <NavbarLink to="/contact"> Liên Hệ</NavbarLink>
            <NavbarLink to="/about"> Giới thiệu</NavbarLink>
            <OpenLinksButton
              onClick={() => {
              setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer show={extendNavbar}>
          <NavbarLinkExtended to="/"> Trang chủ</NavbarLinkExtended>
          <NavbarLinkExtended to="/products"> Dịch vụ</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Liên hệ</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> Giới thiệu</NavbarLinkExtended>
      </NavbarExtendedContainer>
    </NavbarContainer>
  );
}

export default Navbar;
