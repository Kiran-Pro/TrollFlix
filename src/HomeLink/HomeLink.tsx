import { Link } from "react-router-dom";
import Logo from "../assets/Logonetflix.png";
import "./HomeLink.css";

function HomeLink() {
  return (
    <Link to="/">
      <img className="logo" src={Logo} alt="Home" />
    </Link>
  );
}

export default HomeLink;
