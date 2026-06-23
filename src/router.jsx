import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Counter from "./pages/Counter";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

export default router;

