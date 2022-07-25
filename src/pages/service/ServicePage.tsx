import HeaderPage from "../../components/header-page/HeaderPage";
import ItemService from "./ItemService";
import avatar1 from "../../static/imgs/avatar/avatar-1.jpg";
import { useEffect } from "react";

export default function ServicePage() {
  useEffect(() => {
    document.title = "Huyen Trang - Dịch vụ";
  }, []);

  return (
    <div className="services-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="Dịch vụ"
        link="/home"
        prePage="Trang chủ"
        currentPage="dịch vụ"
      />

      <div className="container container-service">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center title">Dịch vụ của chúng tôi</h3>
          </div>
        </div>
        <div className="row">
          <ItemService
            img={avatar1}
            title="Book Your Treatment"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <ItemService
            img={avatar1}
            title="Book Your Treatment"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <ItemService
            img={avatar1}
            title="Book Your Treatment"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <ItemService
            img={avatar1}
            title="Book Your Treatment"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <ItemService
            img={avatar1}
            title="Book Your Treatment"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <ItemService
            img={avatar1}
            title="Book Your Treatment"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <ItemService
            img={avatar1}
            title="Book Your Treatment"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <ItemService
            img={avatar1}
            title="Book Your Treatment"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <ItemService
            img={avatar1}
            title="Book Your Treatment"
            content="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
        </div>
      </div>
    </div>
  );
}
