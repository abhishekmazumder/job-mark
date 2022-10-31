import { Link } from "react-router-dom";
import HeroImg from "../assetes/images/main.svg";
import Wrapper from "../assetes/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>tracking</span> app</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, nemo repudiandae eum veniam cum iure, quasi, perferendis totam deleniti aliquid voluptas commodi magni?</p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={HeroImg} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};



export default Landing;