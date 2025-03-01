import { useNavigate } from "react-router-dom";
import "../pages.css/home.css";


function Home_1() {
  const navigate = useNavigate();
  const button = () => {
    navigate("/login"); //change this with login page
  };

  return (
    <div className="home-div">
      <div className="button-div">
        <button  onClick={button}>Connect With Us </button>
      </div>
    </div>
  );
}
export default Home_1;
