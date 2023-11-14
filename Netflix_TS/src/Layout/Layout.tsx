import { Outlet } from "react-router-dom";
import HomeLink from "../HomeLink/HomeLink";
import "./Layout.css";
import Breadcrumbs from "../components/Breadcrumbs";

function Layout() {
  return (
    <div className="nav_container">
      <HomeLink />
      <Breadcrumbs />
      <Outlet />
    </div>
  );
}

export default Layout;
