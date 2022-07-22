import { ButtonMain } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { url } from "../../routers/allRouter";

export default function ItemService(prop: {img: string, title: string, content?: string}) {
  const { img, title, content } = prop;
  const detailService = useNavigate();

  const handleClickDetailService = (): void => {
    detailService(`${url}/service-details`);
  }

  return (
    <div className="col-12 col-md-6 col-lg-4 mt-3">
      <div className="item-service">
        <div className="img">
          <img src={img} alt="1" />
        </div>
        <div className="description p-2">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="content">
            <p>{content}</p>
          </div>
          <div className="button">
            <ButtonMain title="Chi tiết" click={handleClickDetailService} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ItemServiceSLide(prop: {
  img: string;
  title: string;
  content?: string;
}) {
  const { img, title, content } = prop;
  const detailService = useNavigate();

  const handleClickDetailService = (): void => {
    detailService(`${url}/service-details`);
  };

  return (
    <div className="item-service">
      <div className="img">
        <img src={img} alt="1" />
      </div>
      <div className="title">
        <h3 className="title-text text-center">{title}</h3>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
      <div className="button text-center">
        <ButtonMain title="Chi tiết" click={handleClickDetailService} />
      </div>
    </div>
  );
}
