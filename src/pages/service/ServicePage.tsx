import HeaderPage from "../../components/header-page/HeaderPage";

export default function ServicePage() {
  return (
    <div className="services-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="Dịch vụ"
        link="/home"
        prePage="Trang chủ"
        currentPage="dịch vụ"
      />
    </div>
  );
}
