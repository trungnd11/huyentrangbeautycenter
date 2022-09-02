import { Route, Routes } from "react-router-dom";
import Customer from "./layout/Customer";
import Login from "./pages/login/Login";

function App() {
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
