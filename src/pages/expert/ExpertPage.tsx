import { useEffect } from "react";
import HeaderPage from "../../components/header-page/HeaderPage";
import ItemExpert from "./ItemExpert";

export default function ExpertPage() {
  
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
          <ItemExpert
            avatar="https://technext.github.io/energen/images/trainer-1.jpg"
            name="Elizabeth Nelson"
            position="OWNER / HEAD COACH"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
          />
          <ItemExpert
            avatar="https://technext.github.io/energen/images/trainer-2.jpg"
            name="Scarlett Torres"
            position="OWNER / HEAD COACH"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
          />
          <ItemExpert
            avatar="https://technext.github.io/energen/images/trainer-3.jpg"
            name="Victoria Wright"
            position="OWNER / HEAD COACH"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
          />
          <ItemExpert
            avatar="https://technext.github.io/energen/images/trainer-1.jpg"
            name="Elizabeth Nelson"
            position="OWNER / HEAD COACH"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
          />
          <ItemExpert
            avatar="https://technext.github.io/energen/images/trainer-2.jpg"
            name="Scarlett Torres"
            position="OWNER / HEAD COACH"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
          />
          <ItemExpert
            avatar="https://technext.github.io/energen/images/trainer-3.jpg"
            name="Victoria Wright"
            position="OWNER / HEAD COACH"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
          />
        </div>
      </div>
    </div>
  );
}