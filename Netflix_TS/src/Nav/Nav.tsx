import { useEffect, useState } from "react";
import avatar from "../assets/avatar.png";
import "./Nav.css";
import HomeLink from "../HomeLink/HomeLink";

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
      {/* <img className="logo" src={netflix} alt="Netflix logo" /> */}
      <HomeLink />
      <img className="logo2" src={avatar} alt="avatar logo" />
    </div>
  );
}

export default Nav;
