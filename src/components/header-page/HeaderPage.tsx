import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { url } from "../../routers/allRouter";

export default function HeaderPage(prop: { backgroud: string, title: string, link: string, prePage: string, currentPage: string, currentPageLink?: string, thirdPage?: string }) {
  const { backgroud, title, link, prePage, currentPage, currentPageLink, thirdPage } = prop;
  const [bgPosition, setBgPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBgPosition(window.scrollY);
    });
  }, []);
  return (
    <div
      className="header-page"
      style={{
        backgroundImage: `url(${backgroud})`,
        backgroundPosition: `50% ${bgPosition}px`,
      }}
    >
      <div className="container text-center h-100">
        <div className="row h-100">
          <div className="col-12 h-100 header">
            <div className="header-text">
              <h1 className="title">{title}</h1>
              <p className="breadcrumbs">
                <NavLink title="Trang chủ" to={`${url}${link}`}>
                  {prePage}
                </NavLink>
                {!thirdPage ? (
                  <>
                    <span className="mx-2">/</span>
                    <span>{currentPage}</span>
                  </>
                ) : (
                  <>
                    <span className="mx-2">/</span>
                    <NavLink to={`${url}${currentPageLink}`}>
                      {currentPage}
                    </NavLink>
                  </>
                )}
                {thirdPage && (
                  <>
                    <span className="mx-2">/</span>
                    <span>{thirdPage}</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
