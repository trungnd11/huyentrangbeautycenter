import { useEffect, useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import { getGalleryCustomers } from "../../api/galleryCustomer";
import LoadingComponent from "../../assets/svg/LoadingComponent";
import HeaderPage from "../../components/header-page/HeaderPage";
import ZoomPhotos from "../../components/zoom-photos/ZoomPhotos";

export default function GalleryPage() {
  const [zoomImg, setZoomImg] = useState<string>();
  const openZoomPhoto: any = useRef();
  const [photo, setphoto] = useState([]);
  
  const handleZoomPhoto = (src: string) => {
    openZoomPhoto.current.setOpen(true);
    setZoomImg(src);
  }

  function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const getGallery = async () => {
    const gallery = await getGalleryCustomers();
    const gallerys = gallery.data.map((item: any) => ({
      src: item.img,
      width: getRndInteger(1080, 600),
      height: getRndInteger(600, 1080),
    }));
    setphoto(gallerys);
  };

  useEffect(() => {
    document.title = "Huyen Trang - Bộ sưu tập";
    getGallery();
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
          {
            photo.length !== 0 ? (
              <PhotoAlbum
                photos={photo}
                layout="columns"
                onClick={(imgz, e: { src: string }) => handleZoomPhoto(e.src)}
              />
            ) : <div className="loading-gallery">
                <LoadingComponent width="60px" height="60px" />
            </div>
          }
        </div>
      </div>
    </div>
  );
}
