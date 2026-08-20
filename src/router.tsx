import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    children: [
      { path: "/", element: <h1>Home</h1> },
      { path: "/resultado", element: <h1>Resultado</h1> },
      { path: "/historico", element: <h1>Historico</h1> },
    ],
  },
]);
