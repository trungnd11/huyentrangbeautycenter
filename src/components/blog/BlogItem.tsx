import { useNavigate } from "react-router-dom";

export default function BlogItem(props: { img: string, date: string, month: string, year: string | number, title: string, content: string }) {
  const { img, date, month, year, title, content
  } = props;
  const blogDetail = useNavigate();
  
  const handleClickDetailBlog = () => {
    blogDetail(`/blog-details`);
  }

  return (
    <div className="col-12 col-md-6 col-lg-4" onClick={handleClickDetailBlog}>
      <div className="content">
        <div className="img">
          <img
            src={img}
            alt="1"
          />
        </div>
        <div className="date-update d-flex align-items-center">
          <h2 className="date">{ date }</h2>
          <div className="year d-flex flex-column">
            <span>{ year }</span>
            <span>{ month }</span>
          </div>
        </div>
        <div className="description">
          <h4 className="title">{ title }</h4>
          <p className="contents">
            { content }
          </p>
        </div>
      </div>
    </div>
  );
}
