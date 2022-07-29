import { useEffect, useState } from "react";
import { getExperts } from "../../api/expert";
import HeaderPage from "../../components/header-page/HeaderPage";
import ItemExpert from "./ItemExpert";
import avatar1 from "../../static/imgs/avatar/avatar-1.jpg";

interface ExpertType {
  avatar: string,
  name: string;
  positon: string;
  description: string;
  linkFb: string;
  linkZalo: string;
  linkInsta: string;
}

export default function ExpertPage() {
  const [experts, setExperts] = useState<ExpertType[]>();

  const fetExperts = async () => {
    const expertsRes = await getExperts();
    setExperts(expertsRes.data);
  }

  useEffect(() => {
    document.title = "Huyen Trang - Chuyên gia";
    fetExperts();
  }, []);

  return (
    <div className="expert-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="Chuyên gia"
        link="/home"
        prePage="Trang chủ"
        currentPage="chuyên gia"
      />

      <div className="container container-expert">
        <div className="row">
          <div className="title">
            <h3>Gặp gỡ các chuyên gia</h3>
          </div>
        </div>
        <div className="row">
          {experts &&
            experts.map((item) => (
              <ItemExpert
                avatar={item.avatar}
                name={item.name}
                position={item.positon}
                description={item.description}
                fbLink={item.linkFb}
                instaLink={item.linkInsta}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
