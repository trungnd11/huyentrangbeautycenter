import { NavLink, To } from "react-router-dom";

export default function MenuItem(prop: {children?: any , class?: string, path: To; title: string }) {
  return (
    <>
      <NavLink
        to={`${prop.path}`}
        className={`${prop.class && "active-serviceType"} item mx-3`}
      >
        <li>{prop.title}</li>
        {prop.children}
      </NavLink>
    </>
  );
}
