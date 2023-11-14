import HomeLink from "../HomeLink/HomeLink";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found-container">
      <HomeLink />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default PageNotFound;
