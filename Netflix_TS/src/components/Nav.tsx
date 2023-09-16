import { useEffect, useState } from "react";
import netflix from "../assets/Logonetflix.png";
import avatar from "../assets/avatar.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {};
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="logo" src={netflix} alt="Netflix logo" />
      <img className="logo2" src={avatar} alt="avatar logo" />
    </div>
  );
}

export default Nav;
