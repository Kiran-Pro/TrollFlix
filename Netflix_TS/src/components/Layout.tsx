import { Outlet } from "react-router-dom";
import HomeLink from "./HomeLink";
import "./Layout.css";

function Layout() {
  return (
    <div className="nav_container">
      <HomeLink />
      <Outlet />
    </div>
  );
}

export default Layout;
