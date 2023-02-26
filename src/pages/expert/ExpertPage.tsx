import { useEffect, useState } from "react";
import { getExperts } from "../../api/expert";
import HeaderPage from "../../components/header-page/HeaderPage";
import ItemExpert from "./ItemExpert";
import LoadingComponent from "../../assets/svg/LoadingComponent";

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
        backgroud="https://firebasestorage.googleapis.com/v0/b/image-spa.appspot.com/o/banner%2Fbanner-5.jpg?alt=media&token=5ef21d11-2341-4379-b99a-1a17a14bf557"
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
          {experts ? (
            experts.map((item) => (
              <ItemExpert
                avatar={item.avatar}
                name={item.name}
                position={item.positon}
                description={item.description}
                fbLink={item.linkFb}
                instaLink={item.linkInsta}
              />
            ))
          ) : (
            <div className="loading-expert">
              <LoadingComponent width="60px" height="60px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
