import { createBrowserRouter } from "react-router"
import HomeLayout from "../HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Home/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projectDetails/:id",
        loader: ({ params }) => 
          fetch('/projectDataArray.json')
            .then(res => res.json())
            .then(data => data.find(item => item.id === Number(params.id))),
        element: <ProjectDetails />
      }
    ],
  },
]);
