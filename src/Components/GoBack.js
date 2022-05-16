import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <button className="goback" onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
};

export default GoBack;
