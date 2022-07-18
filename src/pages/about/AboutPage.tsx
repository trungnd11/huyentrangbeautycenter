import HeaderPage from "../../components/header-page/HeaderPage";

export default function AboutPage() {
  return (
    <div className="about-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="giới thiệu"
        link="/home"
        prePage="Trang chủ"
        currentPage="giới thiệu"
      />
    </div>
  );
}
