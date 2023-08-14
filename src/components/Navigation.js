import React from "react";
// Création d'une ancre similaire à a href
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        {/* Dans la navigation créer une ternaire pour indiquer si la navigation link est active applique la class "nav-active" */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
