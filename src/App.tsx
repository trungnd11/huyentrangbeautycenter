
import NavBar from "./components/navbar/NavBar";
import Router from "./routers/Router";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarMobile from "./components/navbar-mobile/NavbarMobile";
import ZaloIcon from "./assets/svg/ZaloIcon";
import Messenger from "./assets/svg/Messenger";
import ScrollTop from "./components/scroll-top/ScrollTop";

function App() {
  const location = useLocation();
  const { key } = location;
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [key]);

  return (
    <div className="App">
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

export default App;
