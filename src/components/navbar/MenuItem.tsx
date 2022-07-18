import { NavLink, To } from "react-router-dom";
import { url } from "../../routers/allRouter";

export default function MenuItem(prop: { path: To; title: string }) {
  return (
    <NavLink to={`${url}${prop.path}`} className="item mx-3">
      <li>{prop.title}</li>
    </NavLink>
  );
}
