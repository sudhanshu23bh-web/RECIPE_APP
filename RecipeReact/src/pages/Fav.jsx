import React from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  // ✅ fix: ensure safe parsing
  const Faviorate = JSON.parse(localStorage.getItem("fav") || "[]");

  // ✅ agar list empty nahi hai tab map kare
  const renderrecipes = Faviorate.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="fav-container">
      {Faviorate.length > 0 ? (
        <div className="fav-list">{renderrecipes}</div>
      ) : (
        <p className="no-fav">No Favorites Found!</p>
      )}
    </div>
  );
};

export default Fav;
