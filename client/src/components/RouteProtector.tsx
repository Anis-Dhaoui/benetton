import { Navigate } from "react-router-dom";

const RouteProtector = ({ isLoggedIn, children }: any) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default RouteProtector;