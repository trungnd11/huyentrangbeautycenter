import { useEffect, useState } from "react";
import { getAbout } from "../../api/about";
import HeaderPage from "../../components/header-page/HeaderPage";
import avatar from "../../static/imgs/avatar/avatar-1.jpg";

interface AboutType {
  title: string;
  avatar?: string;
  description1: string,
  description2: string,
  description3: string,
  description4: string,
}

export default function AboutPage() {
  const [about, setAbout] = useState<AboutType>();
  const getAboutData = async () => {
    try {
      const about = await getAbout();
      setAbout(about.data);
    } catch (error) {
      console.log({ error });
    }
  }

  useEffect(() => {
    document.title = "Huyen Trang - Giới thiệu";
    getAboutData();
  }, []);

  return (
    <div className="about-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
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
          <div className="col-12 col-lg-6">
            <div className="title">
              <h3>{ about?.title }</h3>
            </div>
            <div className="description">
              <p>
                { about?.description1 }
              </p>
              <p>
                { about?.description2 }
              </p>
              <p>
                { about?.description3 }
              </p>
              <p>
                { about?.description4 }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
