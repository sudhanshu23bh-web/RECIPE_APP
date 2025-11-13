import "./App.css";
import Nav from "./Components/Nav";
import Mainroutes from "./Routes/Mainroutes";
import RecipeContext from "./Context/Recipecontext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <RecipeContext>
      <Nav />
      <Mainroutes />
       <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </RecipeContext>
  );
}


export default App;
