import { NavLink, To } from "react-router-dom";
import { url } from "../../routers/allRouter";

export default function MenuItem(prop: {children?: any , class?: string, path: To; title: string }) {
  return (
    <>
      <NavLink
        to={`${url}${prop.path}`}
        className={`${prop.class && "active-serviceType"} item mx-3`}
      >
        <li>{prop.title}</li>
        {prop.children}
      </NavLink>
    </>
  );
}
