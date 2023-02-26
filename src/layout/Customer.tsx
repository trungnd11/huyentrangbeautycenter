import Messenger from "../assets/svg/Messenger";
import ZaloIcon from "../assets/svg/ZaloIcon";
import Footer from "../components/footer/Footer";
import NavbarMobile from "../components/navbar-mobile/NavbarMobile";
import NavBar from "../components/navbar/NavBar";
import ScrollTop from "../components/scroll-top/ScrollTop";
import Router from "../routers/Router";

export default function Customer() {
  return (
    <div>
      <NavBar />
      <NavbarMobile />
      <Router />
      <Footer />
      <ZaloIcon />
      <Messenger />
      <ScrollTop />
    </div>
  );
}
