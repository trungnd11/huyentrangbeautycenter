
import NavBar from "./components/navbar/NavBar";
import Router from "./routers/Router";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarMobile from "./components/navbar-mobile/NavbarMobile";
import Loading from "./assets/svg/Loading";
import ZaloIcon from "./assets/svg/ZaloIcon";
import Messenger from "./assets/svg/Messenger";
import ScrollTop from "./components/scroll-top/ScrollTop";

function App() {
  const location = useLocation();
  const { key } = location;
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [key]);

  useEffect(() => {
    const hideLoading = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(hideLoading);
  }, [key]);

  return (
    <div className="App">
      {loading && <Loading width="50px" height="50px" />}
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
