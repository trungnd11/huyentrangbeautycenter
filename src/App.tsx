
import NavBar from "./components/navbar/NavBar";
import Router from "./routers/Router";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarMobile from "./components/navbar-mobile/NavbarMobile";
import ZaloIcon from "./assets/svg/ZaloIcon";
import Messenger from "./assets/svg/Messenger";
import ScrollTop from "./components/scroll-top/ScrollTop";
import Loading from "./assets/svg/Loading";

function App() {
  const location = useLocation();
  const { key } = location;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    const timeLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeLoading);
    }
  }, [key]);

  return (
    <div className="App">
      {isLoading && <Loading width={50} height={50} />}
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
