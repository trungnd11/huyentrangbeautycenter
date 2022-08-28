import { Link } from "react-router-dom";
import logo from "../../static/imgs/logos/logo.png";

export default function Login() {
  return (
    <div className="login-container">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="form-login">
              <div className="logo text-center mb-3">
                <img src={logo} alt="" />
                <h2>Huyen Trang Tran Beauty Center</h2>
                <p>Chất lượng tạo nên thịnh vượng</p>
              </div>
              <h3 className="text-center">Đăng nhập</h3>
              <form action="">
                <div className="row mt-4">
                  <div className="col-12">
                    <label htmlFor="">Tên đăng nhập</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <label htmlFor="">Mật khẩu</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="container-button-login">
                      <div className="wap-login">
                        <div className="login-bg"></div>
                        <button className="btn-login">Đăng nhập</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="register-icon">
                <div className="row mt-4">
                  <p>Hoặc đăng ký bằng</p>
                  <div className="icon">
                    <i title="google" className="fa-brands fa-google"></i>
                    <i title="facebook" className="fa-brands fa-facebook"></i>
                  </div>
                </div>
              </div>
              <div className="home">
                <div className="row">
                  <div className="col-12 text-end">
                    <i className="fa-solid fa-house me-1"></i>
                    <Link to="/">Trang chủ</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
