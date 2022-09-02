import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserStore,
  loginFacebook,
  loginGoogle,
  registerUser,
  updateConfirmPass,
  updatePassword,
} from "../../store/user/register";
import logo from "../../static/imgs/logos/logo.png";
import { useState } from "react";
import { UserModel } from "../../model/UserModel";
import { fetSesstion } from "../../store/user/session";
import { loginUser } from "../../store/user/login";

export default function Login() {
  const dispatch = useDispatch<any>();
  const userStore = useSelector(getUserStore);
  const [login, setLogin] = useState<UserModel>({
    username: "",
    password: "",
  });

  const handleLoginFacebook = () => {
    dispatch(loginFacebook());
  };

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleRegisterUser = () => {
    dispatch(registerUser(userStore.register));
  };

  const handleLoginUser = () => {
    dispatch(loginUser(login));
  };

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
                {userStore.register.email ? (
                  <>
                    <div className="row mt-3">
                      <div className="col-12">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          onChange={(e) =>
                            dispatch(updatePassword(e.target.value))
                          }
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
                        <label htmlFor="password">Nhập lại mật khẩu</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          onChange={(e) =>
                            dispatch(updateConfirmPass(e.target.value))
                          }
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row mt-4">
                      <div className="col-12">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input
                          id="username"
                          type="text"
                          className="form-control"
                          value={userStore.register.username || login.username}
                          onChange={(e) =>
                            setLogin((pre) => ({
                              ...pre,
                              username: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          value={userStore.register.password || login.password}
                          onChange={(e) =>
                            setLogin((pre) => ({
                              ...pre,
                              password: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </>
                )}
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="container-button-login">
                      <div className="wap-login">
                        <div className="login-bg"></div>
                        {userStore.register.email ? (
                          <button
                            type="button"
                            className="btn-login"
                            onClick={handleRegisterUser}
                          >
                            Đăng ký
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn-login"
                            onClick={handleLoginUser}
                          >
                            Đăng nhập
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="register-icon">
                <div className="row mt-4">
                  <p>Hoặc đăng ký bằng</p>
                  <div className="icon">
                    <i
                      title="google"
                      className="fa-brands fa-google"
                      onClick={handleLoginGoogle}
                    />
                    <i
                      title="facebook"
                      className="fa-brands fa-facebook"
                      onClick={handleLoginFacebook}
                    />
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
