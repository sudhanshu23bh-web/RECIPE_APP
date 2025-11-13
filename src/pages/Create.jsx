import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/Recipecontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data, recipe];
    setdata(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata));
    toast.success("New recipe created!");
    reset();
    navigate("/recipes");
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input {...register("image")} type="url" placeholder="Enter Image Url" />
      <small>This is how the error is shown</small>

      <input {...register("title")} type="text" placeholder="Recipe Title" />
      <input {...register("chef")} type="text" placeholder="Chef Name" />

      <textarea {...register("desc")} placeholder="//start from here"></textarea>
      <textarea {...register("ingr")} placeholder="//write ingredients separated by comma"></textarea>
      <textarea {...register("inst")} placeholder="//write instructions separated by comma"></textarea>

      <select {...register("category")}>
        <option value="">--Select Category--</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default Create;
