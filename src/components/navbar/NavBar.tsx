import "bootstrap/dist/css/bootstrap.css";

export default function NavBar() {
  return (
    <div className="container-fuild">
      <div className="container">
        <div className="nav-bar d-flex justify-content-between align-items-center">
          <div className="logo d-flex align-items-center">
            <img src="" alt="" />
            <h3>ENERGEN</h3>
          </div>
          <div className="list-menu">
            <ul className="d-flex justify-content-between align-items-center">
              <li className="item">Trang chủ</li>
              <li className="item">Giới thiệu</li>
              <li className="item">Dịch vụ</li>
              <li className="item">Chuyên gia</li>
              <li className="item">Blog</li>
              <li className="item">Liên hệ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
