import About from "../../components/about/About";
import Carousel from "../../components/carousel/Carousels";
import Services from "../../components/service/Services";

export default function Home() {
  return (
    <div className="home-page">
      <Carousel />
      <About />
      <Services />
    </div>
  )
}
