import { createBrowserRouter } from "react-router-dom";
import { Home, CreateRecipe } from "../pages";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/create-recipe", element: <CreateRecipe /> },
    ],
  },
]);
