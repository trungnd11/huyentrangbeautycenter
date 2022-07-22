import { useEffect } from "react";
import HeaderPage from "../../components/header-page/HeaderPage";
import RecentBlogItem from "./RecentBlogItem";

export default function BlogDetailPage() {

  return (
    <div className="blog-detail-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="Chi tiết Blog"
        link="/home"
        prePage="Trang chủ"
        currentPage="Blog"
        currentPageLink="/blog"
        thirdPage="Chi tiết Blog"
      />

      <div className="container container-detail-blog">
        <div className="row layout-page">
          <div className="col-12 col-md-4">
            <div className="recent-blog">
              <div className="title">
                <h6>Những bài đăng gần đây</h6>
              </div>
              <RecentBlogItem />
              <RecentBlogItem />
              <RecentBlogItem />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="content">
              <h2 className="text-center">Is wellness the new luxury</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
              <p>
                <img
                  src="https://technext.github.io/energen/images/image_1.jpg"
                  alt="1"
                />
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
              <h2 className="text-center">Is wellness the new luxury</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
              <p>
                <img
                  src="https://technext.github.io/energen/images/image_1.jpg"
                  alt="1"
                />
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
