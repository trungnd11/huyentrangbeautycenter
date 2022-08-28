
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Customer from "./layout/Customer";
import Login from "./pages/login/Login";

function App() {
  const location = useLocation();
  const { key } = location;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    const timeLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeLoading);
    }
  }, [key]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Customer />} />
      </Routes>
    </div>
  );
}

export default App;
