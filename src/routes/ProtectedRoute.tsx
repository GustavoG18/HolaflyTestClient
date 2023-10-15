import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteType } from "../types";

const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/",
  children,
}: ProtectedRouteType) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
