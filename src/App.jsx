import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Error404 from "./pages/Error404";
import Service from "./pages/Service";
function App() {
  const router = createBrowserRouter([
    {
      path: "/Painting-Services",
      element: <Main />,
      errorElement: <h3>Error</h3>,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <h3>Error</h3>,
        },
        {
          path: "/Painting-Services/portfolio",
          element: <Portfolio />,
          errorElement: <h3>Error</h3>,
        },
        {
          path: "/Painting-Services/service/:id",
          element: <Service />,
          errorElement: <h3>Error</h3>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
