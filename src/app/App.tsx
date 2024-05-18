import { Form } from "../pages/Form"
import "./index.css"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
  ]);

export const App = () => {
    return <RouterProvider router={router}></RouterProvider>
}