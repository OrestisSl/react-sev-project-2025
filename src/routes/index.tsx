import { createBrowserRouter } from "react-router-dom";
import { Home , CreateRecipe , Preferences } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/create-recipe",
    element: <CreateRecipe/>,
  },
  {
    path: "/preferences",
    element: <Preferences />
  }
]);