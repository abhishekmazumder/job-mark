import { Link } from "react-router-dom";
import img from "../assetes/images/not-found.svg";
import Wrapper from "../assetes/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="404" />
        <h3>Ohh! Page not found.</h3>
        <p>We can't seem to find the page, you are looking for.</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;