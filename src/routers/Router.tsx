import { Route, Routes } from "react-router-dom";
import { authRouter } from "./allRouter"

export default function Router() {
  return (
    <Routes>
      {authRouter.map(router => (
        <Route path={router.path} element={<router.component />}></Route>
      ))}
    </Routes>
  ); 
}
