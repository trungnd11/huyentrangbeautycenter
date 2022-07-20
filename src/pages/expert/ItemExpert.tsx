/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";

export default function ItemExpert(prop: { avatar: string, name: string, position?: String, description?: string ,fbLink?: string, instaLink?: string, messLink?: string }) {
  const {
    avatar,
    name,
    position,
    description,
    fbLink,
    instaLink,
    messLink,
  } = prop;
  return (
    <div className="col-12 col-md-6 col-lg-4 mt-5">
      <div className="card-expert">
        <div className="avatar">
          <img
            src={avatar}
            alt="1"
          />
        </div>
        <div className="name">
          <h3>{ name }</h3>
          <span>{ position }</span>
        </div>
        <div className="description">
          <p>
            { description }
          </p>
        </div>
        <div className="contact">
          <Link to={fbLink || "#"}>
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to={instaLink || "#"} className="mx-2">
            <i className="fa-brands fa-instagram-square"></i>
          </Link>
          <Link to={messLink || "#"}>
            <i className="fa-brands fa-facebook-messenger"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
