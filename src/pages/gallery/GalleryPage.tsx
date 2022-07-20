import { useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import HeaderPage from "../../components/header-page/HeaderPage";
import photos from "./photo";

export default function GalleryPage() {

  return (
    <div className="photos-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="Bộ sưu tập"
        link="/home"
        prePage="Trang chủ"
        currentPage="Bộ sưu tập"
      />
      <div className="gallery-photos">
        <div className="header">
          <h3 className="text-center">Hình ảnh khách hàng sử dụng dịch vụ</h3>
        </div>
        <PhotoAlbum
          photos={photos}
          layout="columns"
          onClick={(imgz, e) => console.log(e.src)}
        />
      </div>
    </div>
  );
}
