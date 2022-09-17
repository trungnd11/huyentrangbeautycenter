import { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import img1 from "../../static/imgs/banner/banner-1.jpg";
import { BlogModel } from "../../model/BlogModel";
import { getBlogs } from "../../api/blog";
import { FormatDate } from "../../helpper/functionCommon";

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogModel[]>([]);

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
                date={FormatDate(item?.createdAt).getDate()}
                month={FormatDate(item?.createdAt).getMonth()}
                year={FormatDate(item?.createdAt).getFullYear()}
                title={item.title}
                content={item.content}
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
