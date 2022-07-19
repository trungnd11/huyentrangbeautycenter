import BlogItem from "./BlogItem"

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
  );
}
