import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 5%;

  @media (max-width: 700px) {
    flex: 90%;
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

  @media (max-width: 700px) {
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

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #000;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  width: 100%;
  text-align: center;
  transform: translateX(${prop => prop.show ? 0 : '100%'});
  transition: transform .6s ease;
`;