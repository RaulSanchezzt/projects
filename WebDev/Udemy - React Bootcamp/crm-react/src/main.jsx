import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NewClient, { action as newClientAction } from "./pages/NewClient";
import Index, { loader as clientsLoader } from "./pages/Index";
import EditClient, {
  loader as editClientLoader,
  action as editClientAction,
} from "./pages/EditClient";
import ErrorPage from "./components/ErrorPage";
import { action as deleteClientAction } from "./components/Client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/new",
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/:clientId/edit",
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/:clientId/delete",
        action: deleteClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
