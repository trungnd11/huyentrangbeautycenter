import { NavLink } from "react-router-dom";
import { url } from "../../routers/allRouter";

export default function HeaderPage(prop: { backgroud: string, title: string, link: string, prePage: string, currentPage: string }) {
  const { backgroud, title, link, prePage, currentPage } = prop;
  return (
    <div
      className="header-page"
      style={{ backgroundImage: `url(${backgroud})` }}
    >
      <div className="container text-center h-100">
        <div className="row h-100">
          <div className="col-12 h-100">
            <div className="header">
              <h1 className="title">{title}</h1>
              <p className="breadcrumbs">
                <NavLink title="Trang chủ" to={`${url}${link}`}>
                  {prePage}
                </NavLink>
                <span className="mx-2">/</span>
                <span>{currentPage}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
