import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import avatar1 from "../../static/imgs/avatar/avatar-1.jpg";
import CustomerItem from './CustomerItem';

let slides = [
  <CustomerItem comments='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi corrupti consectetur! Distinctio magnam veniam, molestiae necessitatib!'
    avatar={avatar1}
    name="Lancer Rogen"
    user='Khách hàng'
  />,
  <CustomerItem comments='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi corrupti consectetur! Distinctio magnam veniam, molestiae necessitatib!'
    avatar={avatar1}
    name="Lancer Rogen"
    user='Khách hàng'
  />,
  <CustomerItem comments='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi corrupti consectetur! Distinctio magnam veniam, molestiae necessitatib!'
    avatar={avatar1}
    name="Lancer Rogen"
    user='Khách hàng'
  />,
  <CustomerItem comments='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi corrupti consectetur! Distinctio magnam veniam, molestiae necessitatib!'
    avatar={avatar1}
    name="Lancer Rogen"
    user='Khách hàng'
  />,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export default function Customers() {
  return (<div className="customers">
    <div className="container">
      <div className="title text-center">
        <h2>Trải nghiệm khách hàng</h2>
      </div>
      <AliceCarousel autoPlay infinite animationDuration={3000} mouseTracking responsive={responsive} items={slides} />
    </div>
  </div>);
}
