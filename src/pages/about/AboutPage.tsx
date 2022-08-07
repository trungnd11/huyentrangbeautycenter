import { useEffect, useState } from "react";
import { getAbout } from "../../api/about";
import LoadingComponent from "../../assets/svg/LoadingComponent";
import HeaderPage from "../../components/header-page/HeaderPage";
import avatar from "../../static/imgs/avatar/avatar-1.jpg";

interface AboutType {
  title: string;
  avatar?: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}

export default function AboutPage() {
  const [about, setAbout] = useState<AboutType>();
  const [loading, setLoading] = useState<boolean>(true);
  const getAboutData = async () => {
    try {
      const about = await getAbout();
      setAbout(about.data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    document.title = "Huyen Trang - Giới thiệu";
    getAboutData();
  }, []);

  return (
    <div className="about-page">
      <HeaderPage
        backgroud="https://firebasestorage.googleapis.com/v0/b/image-spa.appspot.com/o/banner%2Fbanner-5.jpg?alt=media&token=5ef21d11-2341-4379-b99a-1a17a14bf557"
        title="giới thiệu"
        link="/home"
        prePage="Trang chủ"
        currentPage="giới thiệu"
      />
      <div className="container container-about">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="avatar">
              <img src={about?.avatar || avatar} alt="avatar" />
            </div>
          </div>
          {!loading ? (
            <div className="col-12 col-lg-6">
              <div className="title">
                <h3>{about?.title}</h3>
              </div>
              <div className="description">
                <p>
                  <i className="fa-solid fa-circle mx-2" />
                  <span>{about?.description1}</span>
                </p>
                <p>
                  <i className="fa-solid fa-circle mx-2" />
                  <span>{about?.description2}</span>
                </p>
                <p>
                  <i className="fa-solid fa-circle mx-2" />
                  <span>{about?.description3}</span>
                </p>
                <p>
                  <i className="fa-solid fa-circle mx-2" />
                  <span>{about?.description4}</span>
                </p>
              </div>
            </div>
          ) : (
            <div style={{ position: "relative", height: "50vh" }}>
              <LoadingComponent width="60px" height="60px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
