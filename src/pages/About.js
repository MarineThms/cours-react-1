import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Ce projet</h1>
      <div className="description-projet">
        <p>
          Découvrez les différents pays du monde et leur drapeau, mais également
          leur capitale et la population totale du pays. Je vous présente le
          premier projet React que j'ai réalisé.
        </p>
        <p>
          <h4 className="titre-projet">
            Les objectifs techniques de ce projet sont de:
          </h4>
          <ul>
            <li>Créer une navigation entre deux pages</li>
            <li>Créer des requêtes à partir d'une API et Axios</li>
            <li>Filtrer le nombre de pays à afficher</li>
            <li>Filtrer les continents</li>
          </ul>
        </p>
        <p>Réalisé grâce au cours de FromScratch Podia</p>
      </div>
    </div>
  );
};

export default About;
