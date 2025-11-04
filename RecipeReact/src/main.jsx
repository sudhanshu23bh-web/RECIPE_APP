import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Recipecontext from './Context/Recipecontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Recipecontext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Recipecontext>
  
)
