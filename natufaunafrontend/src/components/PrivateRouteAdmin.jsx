import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { useContext } from "react";

const PrivateRouteUser = ({ children }) => {
  const { adminSession } = useContext(AdminContext);
  const navigate = useNavigate();

  if (adminSession) {
    return children;
  } else {
    return navigate("/");
  }
};

export default PrivateRouteUser;
