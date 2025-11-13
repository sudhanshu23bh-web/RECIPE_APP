import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../Context/Recipecontext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./SingleRecipe.css";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();

  // Fix: Number(params.id) to correctly match numeric or string ids
  const recipe = data.find(
    (recipe) => recipe.id === params.id || recipe.id === Number(params.id)
  );

  const { register, handleSubmit } = useForm({
    defaultValues: recipe || {},
  });

  const updateHandler = (updatedRecipe) => {
    const index = data.findIndex(
      (r) => r.id === params.id || r.id === Number(params.id)
    );
    if (index === -1) return toast.error("Recipe not found!");

    const copy = [...data];
    copy[index] = { ...copy[index], ...updatedRecipe };
    setdata(copy);
    localStorage.setItem("recipe", JSON.stringify(copy));
    toast.success("Recipe updated!");
  };

  const DeleteHandler = () => {
    const filtered = data.filter(
      (r) => r.id !== params.id && r.id !== Number(params.id)
    );
    setdata(filtered);
    localStorage.setItem("recipe", JSON.stringify(filtered));
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  if (!recipe) return <p>Loading...</p>;

  // ✅ Fixed: useState syntax (remove extra semicolon)
  const [Faviorate, setFaviorate] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const favhandler = () => {
    let copyfav = [...Faviorate];
    copyfav.push(recipe);
    setFaviorate(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    toast.success("Added to Favorites ❤️");
  };

  const unfavhandler = () => {
    const filterfav = Faviorate.filter((f) => f.id !== recipe?.id);
    setFaviorate(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
    toast.info("Removed from Favorites 💔");
  };

  return (
    <div className="single-container">
      <div className="single-left">
        <div className="fav-icons">
          <i onClick={favhandler} className="ri-heart-line fav-icon"></i>
          <i onClick={unfavhandler} className="ri-heart-fill unfav-icon"></i>
        </div>

        <h1>{recipe?.title}</h1>
        <img src={recipe?.image} alt={recipe?.title} />
        <h3>Chef: {recipe?.chef}</h3>
        <p className="desc">{recipe?.desc}</p>
      </div>

      <form className="single-form" onSubmit={handleSubmit(updateHandler)}>
        <input {...register("image")} type="url" placeholder="Enter Image Url" />
        <small className="error">This is how the error is shown</small>

        <input {...register("title")} type="text" placeholder="Recipe Title" />
        <input {...register("chef")} type="text" placeholder="Chef Name" />

        <textarea {...register("desc")} placeholder="//start from here"></textarea>
        <textarea
          {...register("ingr")}
          placeholder="//ingredients, comma separated"
        ></textarea>
        <textarea
          {...register("inst")}
          placeholder="//instructions, comma separated"
        ></textarea>

        <select {...register("category")}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button type="submit" className="update-btn">
          Update Recipe
        </button>
        <button type="button" onClick={DeleteHandler} className="delete-btn">
          Delete Recipe
        </button>
      </form>
    </div>
  );
};

export default SingleRecipe;
