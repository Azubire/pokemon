import Home from "@/pages/Home";
import Pokemons from "@/pages/Pokemons";
import { createBrowserRouter } from "react-router-dom";

// init root router
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemons",
    element: <Pokemons />,
  },
]);
