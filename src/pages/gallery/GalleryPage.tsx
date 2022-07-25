import { useEffect, useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import HeaderPage from "../../components/header-page/HeaderPage";
import ZoomPhotos from "../../components/zoom-photos/ZoomPhotos";
import photos from "./photo";

export default function GalleryPage() {
  const [zoomImg, setZoomImg] = useState<string>();
  const openZoomPhoto: any = useRef();
  
  const handleZoomPhoto = (src: string) => {
    openZoomPhoto.current.setOpen(true);
    setZoomImg(src);
  }

  useEffect(() => {
    document.title = "Huyen Trang - Bộ sưu tập";
  }, []);

  return (
    <div className="photos-page">
      <HeaderPage
        backgroud="https://technext.github.io/energen/images/bg_2.jpg"
        title="Bộ sưu tập"
        link="/home"
        prePage="Trang chủ"
        currentPage="Bộ sưu tập"
      />
      <ZoomPhotos ref={openZoomPhoto} photo={zoomImg} />
      <div className="container">
        <div className="gallery-photos">
          <div className="header">
            <h3 className="text-center">Hình ảnh khách hàng sử dụng dịch vụ</h3>
          </div>
          <PhotoAlbum
            photos={photos}
            layout="columns"
            onClick={(imgz, e) => handleZoomPhoto(e.src)}
          />
        </div>
      </div>
    </div>
  );
}
