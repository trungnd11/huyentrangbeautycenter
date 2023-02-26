import { NavLink, To } from "react-router-dom";

export default function MenuItem(prop: {
  children?: any;
  class?: string;
  path: To;
  title: string;
  type?: "dropdown";
  onClickDropDown?: Function;
  onClick?: Function;
}) {
  return (
    <>
      <NavLink
        to={`${prop.path}`}
        className={`${prop.class && "active-serviceType"} item mx-3`}
        onClick={() => {
          prop.onClick && prop.onClick();
        }}
      >
        <li>
          <span>{prop.title}</span>
          {prop.type === "dropdown" && (
            <i
              className="fa-solid fa-chevron-down ms-2"
              style={{ fontSize: ".8rem" }}
              onClick={(e) => {
                e.preventDefault();
                prop.onClickDropDown && prop.onClickDropDown();
              }}
            />
          )}
        </li>
        {prop.children}
      </NavLink>
    </>
  );
}
