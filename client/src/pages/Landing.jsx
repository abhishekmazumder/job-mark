import Logo from "../assetes/images/logo.svg";
import HeroImg from "../assetes/images/main.svg";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={Logo} alt="JobMark" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>tracking</span> app</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima, nemo repudiandae eum veniam cum iure, quasi, perferendis totam deleniti aliquid voluptas commodi magni?</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={HeroImg} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page{
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1{
    font-weight: 700;
    span{
      color: var(--primary-500);
    }
  }
  p{
    color: var(--grey-600);
  }
  .main-img{
    display: none;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 992px){
    .page{
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem
    }
    .main-img{
      display: block;
    }
  }
`;

export default Landing;