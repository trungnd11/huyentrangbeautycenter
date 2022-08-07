import { useEffect } from "react";
import BlogItem from "../../components/blog/BlogItem";
import HeaderPage from "../../components/header-page/HeaderPage";

export default function BlogPage() {
  useEffect(() => {
    document.title = "Huyen Trang - Bài viết";
  }, []);

  return (
    <div className="blog-page">
      <HeaderPage
        backgroud="https://firebasestorage.googleapis.com/v0/b/image-spa.appspot.com/o/banner%2Fbanner-5.jpg?alt=media&token=5ef21d11-2341-4379-b99a-1a17a14bf557"
        title="Blog"
        link="/home"
        prePage="Trang chủ"
        currentPage="Blog"
      />
      <div className="content blog">
        <div className="container">
          <div className="row">
            <div className="title text-center">
              <h3>Cập nhật tin tức làm đẹp</h3>
            </div>
          </div>
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
