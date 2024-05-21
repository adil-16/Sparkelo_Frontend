import { Route, Routes } from "react-router-dom";
import Login from "../pages/userProfile/Login";
import Home from "../pages/userProfile/Home";

const PagesRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
};
export default PagesRoutes;
