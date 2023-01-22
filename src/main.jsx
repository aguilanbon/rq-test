import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import DuplicateHeroes from "./pages/DuplicateHeroes";
import SingleSuperHero from "./pages/SingleSuperHero";
import Superheroes from "./pages/Superheroes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Superheroes />,
      },
      {
        path: "/duplicate",
        element: <DuplicateHeroes />,
      },
      {
        path: "/superhero/:name",
        element: <SingleSuperHero />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
