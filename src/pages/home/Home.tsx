import About from "../../components/about/About";
import Blog from "../../components/blog/Blog";
import Carousel from "../../components/carousel/Carousels";
import CounterCustomers from "../../components/counter-customers/CounterCustomers";
import Customers from "../../components/customer/Customers";
import Gallery from "../../components/gallery/Gallery";
import Services from "../../components/service/Services";

export default function Home() {
  
  return (
    <div className="home-page">
      <Carousel />
      <About />
      <Services />
      <Customers />
      <CounterCustomers />
      <Blog />
      <Gallery />
    </div>
  );
}
