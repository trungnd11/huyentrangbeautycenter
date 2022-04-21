import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "115px")};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;

  @media (max-width: 768px) {
    height: 100vh;
    overflow: hidden;
  }
`;

export const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 5%;

  @media (max-width: 768px) {
    flex: 100%;
  }
`;

export const RightContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: #000;
  font-size: 1.2em;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: -50%;
    left: 0;
    background-color: #277dfc;
    transform: scaleX(0);
    transition: all 0.6s ease;
  }

  &:hover {
    color: #277dfc;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled.div`
  color: #000;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 20px;
  border-bottom: 1px solid #00000012;
  display: block;
  padding-bottom: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 70px;
  height: auto;
`;

export const NavBarTitle = styled.h4`
  display: flex;
  color: #978749;
  font-size: 30px;
  font-family: Great Vibes;
  align-items: center;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #000;
  font-size: 30px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  width: 100%;
  text-align: center;
  transform: translateX(${(prop) => (prop.show ? 0 : "100%")});
  transition: transform 400ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;