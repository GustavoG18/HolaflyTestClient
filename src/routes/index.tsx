import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/home";
import { useUserContext } from "../context/UserContext";
import ProtectedRoute from "./ProtectedRoute";

export const Router = () => {
  const { user } = useUserContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              isAllowed={!user?.user?.token.length}
              redirectTo="/home"
            >
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAllowed={user?.user?.token.length} redirectTo="/">
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
