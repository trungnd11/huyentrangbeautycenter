import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getLocalStorage } from "./components/commom/function";
import Customer from "./layout/Customer";
import Login from "./pages/login/Login";

function App() {
  const location = useLocation();
  const { key } = location;
  const isUser = getLocalStorage("user");

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [key]);
  return (
    <div className="App">
      {isUser ? (
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
