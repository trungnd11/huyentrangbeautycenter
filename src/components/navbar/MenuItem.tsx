import { NavLink, To } from "react-router-dom";

export default function MenuItem(prop: { path: To; title: string }) {
  return (
    <NavLink to={prop.path} className="item mx-3">
      <li>{ prop.title }</li>
    </NavLink>
  );
}
