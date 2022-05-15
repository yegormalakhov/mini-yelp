import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return <button className="goback" onClick={() => navigate("/")}>Go Back</button>;
};

export default GoBack;
