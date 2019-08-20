import "./Favorites.scss";

import React from "react";

const Favorites = ({ favorites, fetchWeatherAPI }) => {
  const handleFavoritesSearch = ({ lat, lon }) => {
    fetchWeatherAPI(`lat=${lat}&lon=${lon}`);
  };
  return (
    <div className="favorites">
      {favorites &&
        favorites.map(item => (
          <button
            key={item[1]}
            className="favorites__link"
            // TODO: Rewrite without lambda
            onClick={() => handleFavoritesSearch(item[0])}
          >
            {item[1]}
          </button>
        ))}
    </div>
  );
};
export default Favorites;
