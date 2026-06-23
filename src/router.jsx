import { createBrowserRouter } from "react-router";

import Home from "../pages/home/Home";
import counter from "../pages/counter/counter";
import About from "../pages/about/About";
import App from "../App";

export const router = createBrowserRouter([
  
  
  
    
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "counter",
        element: <counter />,
      },
    ],