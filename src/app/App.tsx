import { FileUploader } from "../pages/FileUploader";
import { Table } from "../pages/Table"
import "./index.css"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Table />,
    },
    {
      path: "/uploader",
      element: <FileUploader/>
    }
  ]);

export const App = () => {
    return <RouterProvider router={router}></RouterProvider>
}