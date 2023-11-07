import { createBrowserRouter } from "react-router-dom";
import PublicComponent from "../core/layouts/public/public.component";
import HomeComponent from "../pages/home/home.component";
import UsersComponent from "../pages/users/users.component";
import FormComponent from "../pages/form/form.component";
import DetailsComponents from "../pages/details/details.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicComponent />,
    children: [
      {
        index: true,
        element: <HomeComponent />,
      },
      {
        path: "/users",
        element: <UsersComponent />,
      },
      {
        path: "/form",
        element: <FormComponent />,
      },
      {
        path: "/details",
        element: <DetailsComponents/>,
      },
    ],
  },
]);

export default router;
