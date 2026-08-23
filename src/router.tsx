import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <h1>Home</h1> },
      { path: "/resultado", element: <h1>Resultado</h1> },
      { path: "/historico", element: <h1>Historico</h1> },
    ],
  },
]);
