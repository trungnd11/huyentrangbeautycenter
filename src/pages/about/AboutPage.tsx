import { useEffect } from "react";
import HeaderPage from "../../components/header-page/HeaderPage";
import avatar from "../../static/imgs/avatar/avatar-1.jpg";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Huyen Trang - Giới thiệu";
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
              <img src={avatar} alt="avatar" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="title">
              <h3>Benefits of Doing Spa &amp; Massage</h3>
            </div>
            <div className="description">
              <p>
                The Big Oxmox advised her not to do so, because there were
                thousands of bad Commas, wild Question Marks and devious
                Semikoli, but the Little Blind Text didn’t listen. She packed
                her seven versalia, put her initial into the belt and made
                herself on the way.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                eligendi veritatis quam modi tempora quasi quas tenetur, harum,
                alias eos asperiores quae ab architecto vero ipsam magni.
                Possimus, illum excepturi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                eligendi veritatis quam modi tempora quasi quas tenetur, harum,
                alias eos asperiores quae ab architecto vero ipsam magni.
                Possimus, illum excepturi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                eligendi veritatis quam modi tempora quasi quas tenetur, harum,
                alias eos asperiores quae ab architecto vero ipsam magni.
                Possimus, illum excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
