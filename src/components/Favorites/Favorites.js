import React from "react";
import "./Favorites.scss";

const Favorites = ({ favorites, setFavorites }) => {
  return (
    <div className="favorites">
      {favorites &&
        favorites.map(item => (
          <button key={item[1]} className="favorites__link">
            {item[1]}
          </button>
        ))}
    </div>
  );
};
export default Favorites;
