import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  // setData = permet de modifier la data
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");
  // Le useEffect se joue quand le composant est monté
  useEffect(() => {
    // va chercher ce lien .quand tu l'as trouvé montre le moi
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <p>1</p>
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <p>250</p>
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {
          data
            .filter((country) => country.continents[0].includes(selectedRadio)) //filtrer
            .sort((a, b) => b.population - a.population) //trier
            .slice(0, rangeValue) //couper
            .map((country, index) => (
              <Card key={index} country={country} />
            )) //afficher
        }
      </ul>
    </div>
  );
};

export default Countries;
