import { Link } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipes/details/${recipe.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={recipe.image} alt={recipe.title} />
        <h3>{recipe.title}</h3>
        <p><strong>Chef:</strong> {recipe.chef}</p>
        <p>{recipe.desc}</p>
      </Link>
    </div>
  );
};

export default RecipeCard;

