import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-404">
      <div className="card">
        <div className="code">404</div>
        <h2>Oops! Page Not Found</h2>
        <p>
          Sorry, the page you're looking for doesn’t exist, was removed, or is
          temporarily unavailable.
        </p>

        <div className="actions">
          <Link to="/" className="btn btn-primary">
            ⬅ Go to Home
          </Link>
          <Link to="/recipes" className="btn btn-ghost">
            🍳 Browse Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
