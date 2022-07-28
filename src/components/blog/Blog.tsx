import BlogItem from "./BlogItem";
import img1 from "../../static/imgs/banner/banner-1.jpg";
import img2 from "../../static/imgs/banner/banner-2.jpg";
import img3 from "../../static/imgs/banner/banner-3.jpg";

export default function Blog() {
  return (
    <div className="blog">
      <div className="title text-center">
        <h2 className="text">Blog Beauty</h2>
        <span>Những bài đăng gần đây</span>
      </div>
      <div className="container">
        <div className="row">
          <BlogItem
            img={img1}
            date="25"
            month="Tháng 1"
            year="2022"
            title="Is wellness the new luxury"
            content=" A small river named Duden flows by their place and supplies it with the necessary regelialia."
          />
          <BlogItem
            img={img2}
            date="25"
            month="Tháng 1"
            year="2022"
            title="Is wellness the new luxury"
            content=" A small river named Duden flows by their place and supplies it with the necessary regelialia."
          />
          <BlogItem
            img={img3}
            date="25"
            month="Tháng 1"
            year="2022"
            title="Is wellness the new luxury"
            content=" A small river named Duden flows by their place and supplies it with the necessary regelialia."
          />
        </div>
      </div>
    </div>
  );
}
