import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/home";
import { useUserContext } from "../context/UserContext";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/notpage/NotFound";

export const Router = () => {
  const { user } = useUserContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAllowed={!user?.token} redirectTo="/home">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAllowed={!!user?.token} redirectTo="/">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
