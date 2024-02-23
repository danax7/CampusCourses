import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistartionPage } from "./pages/RegistartionPage/RegistrationPage";
import { GroupsPage } from "./pages/GroupsPage/GroupsPage";


export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/registration',
        element: <RegistartionPage />,
      },
      {
        path: '/groups',
        element: <GroupsPage />,
      },
    ],
  },
]);
