import BlogItem from "../../components/blog/BlogItem";
import HeaderPage from "../../components/header-page/HeaderPage";

export default function BlogPage() {
  return (
    <div className="blog-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="Blog"
        link="/home"
        prePage="Trang chủ"
        currentPage="Blog"
      />
      <div className="content blog">
        <div className="container">
          <div className="row">
            <BlogItem
              img="https://technext.github.io/energen/images/image_1.jpg"
              date="25"
              month="Tháng 1"
              year="2022"
              title="Is wellness the new luxury"
              content=" A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
            <BlogItem
              img="https://technext.github.io/energen/images/image_2.jpg"
              date="25"
              month="Tháng 1"
              year="2022"
              title="Is wellness the new luxury"
              content=" A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
            <BlogItem
              img="https://technext.github.io/energen/images/image_3.jpg"
              date="25"
              month="Tháng 1"
              year="2022"
              title="Is wellness the new luxury"
              content=" A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
            <BlogItem
              img="https://technext.github.io/energen/images/image_1.jpg"
              date="25"
              month="Tháng 1"
              year="2022"
              title="Is wellness the new luxury"
              content=" A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
            <BlogItem
              img="https://technext.github.io/energen/images/image_2.jpg"
              date="25"
              month="Tháng 1"
              year="2022"
              title="Is wellness the new luxury"
              content=" A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
            <BlogItem
              img="https://technext.github.io/energen/images/image_3.jpg"
              date="25"
              month="Tháng 1"
              year="2022"
              title="Is wellness the new luxury"
              content=" A small river named Duden flows by their place and supplies it with the necessary regelialia."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
