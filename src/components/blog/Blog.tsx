import BlogItem from "./BlogItem";
import img1 from "../../static/imgs/banner/banner-1.jpg";
import { useEffect, useState } from "react";
import { BlogModel } from "../../model/BlogModel";
import { getBlogs } from "../../api/blog";

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogModel[]>([
    {
      title: "",
      content: "",
      createdAt: "",
      category: ""
    }
  ]);

  const fetBlogNew = async () => {
    try {
      const response = await getBlogs("3");
      setBlogs(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetBlogNew();
  }, []);

  return (
    <div className="blog">
      <div className="title text-center">
        <h2 className="text">Blog Beauty</h2>
        <span>Những bài đăng gần đây</span>
      </div>
      <div className="container">
        <div className="row">
          {blogs && blogs.length > 0 ? (
            blogs.map((item) => (
              <BlogItem
                img={img1}
                date={new Date("2022-09-14T16:36:18.459Z").getDate()}
                month={new Date("2022-09-14T16:36:18.459Z").getMonth()}
                year={new Date("2022-09-14T16:36:18.459Z").getFullYear()}
                title={item.title}
                // content={item.content}
              />
            ))
          ) : (
            <p>Chưa có bài đăng</p>
          )}
        </div>
      </div>
    </div>
  );
}
