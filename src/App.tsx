import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getCookie } from "./components/commom/function/function";
import { Author } from "./enum/Enum";
import Customer from "./layout/Customer";
import Login from "./pages/login/Login";
import { getLoginStore, login } from "./store/user/login";

function App() {
  const location = useLocation();
  const { key } = location;
  const isAuthor = getCookie(Author.USER);
  const dispatch = useDispatch();
  const { loading } = useSelector(getLoginStore);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    if (isAuthor) {
      dispatch(login(JSON.parse(isAuthor)));
      <Navigate to="/" />
    }
  }, [key, dispatch, isAuthor]);
  return (
    <div className="App">
      {!loading ? (
        <Routes>
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Customer />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Customer />} />
        </Routes>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
