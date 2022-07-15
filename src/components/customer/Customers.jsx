import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

let slides = [
  <div className="content">
    <div className="icon">
      <i className="fa-solid fa-quote-left"></i>
    </div>
    <div className="comment">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed alias suscipit culpa enim nisi fugit sequi perferendis, facilis fuga accusantium! Quia placeat incidunt culpa quos similique veritatis rerum numquam nobis.</p>
    </div>
    <div className="avatar">
      <img src="https://technext.github.io/energen/images/person_4.jpg" alt="" />
      <div className="customer-detail">
        <h5>Lance Roger</h5>
        <span>Customer</span>
      </div>
    </div>
  </div>,
  <div className="content">
    <div className="icon">
      <i className="fa-solid fa-quote-left"></i>
    </div>
    <div className="comment">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed alias suscipit culpa enim nisi fugit sequi perferendis, facilis fuga accusantium! Quia placeat incidunt culpa quos similique veritatis rerum numquam nobis.</p>
    </div>
    <div className="avatar">
      <img src="https://technext.github.io/energen/images/person_3.jpg" alt="" />
      <div className="customer-detail">
        <h5>Lance Roger</h5>
        <span>Customer</span>
      </div>
    </div>
  </div>,
  <div className="content">
    <div className="icon">
      <i className="fa-solid fa-quote-left"></i>
    </div>
    <div className="comment">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed alias suscipit culpa enim nisi fugit sequi perferendis, facilis fuga accusantium! Quia placeat incidunt culpa quos similique veritatis rerum numquam nobis.</p>
    </div>
    <div className="avatar">
      <img src="https://technext.github.io/energen/images/person_1.jpg" alt="" />
      <div className="customer-detail">
        <h5>Lance Roger</h5>
        <span>Customer</span>
      </div>
    </div>
  </div>,
  <div className="content">
    <div className="icon">
      <i className="fa-solid fa-quote-left"></i>
    </div>
    <div className="comment">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed alias suscipit culpa enim nisi fugit sequi perferendis, facilis fuga accusantium! Quia placeat incidunt culpa quos similique veritatis rerum numquam nobis.</p>
    </div>
    <div className="avatar">
      <img src="https://technext.github.io/energen/images/person_2.jpg" alt="" />
      <div className="customer-detail">
        <h5>Lance Roger</h5>
        <span>Customer</span>
      </div>
    </div>
  </div>,
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
