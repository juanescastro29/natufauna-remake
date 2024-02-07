import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const PrivateRouteUser = ({ children }) => {
  const { session } = useContext(UserContext);
  const navigate = useNavigate()

  if (session) {
    return children;
  } else {
    return navigate("/");
  }
};

export default PrivateRouteUser;
