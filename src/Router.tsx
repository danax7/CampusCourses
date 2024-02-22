import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { LoginPage } from "./pages/LoginPage/LoginPage";


export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);
