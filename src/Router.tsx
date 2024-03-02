import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistartionPage } from "./pages/RegistartionPage/RegistrationPage";
import { GroupsPage } from "./pages/GroupsPage/GroupsPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { MainPage } from "./pages/MainPage/MainPage";
import { GroupPage } from "./pages/GroupPage/GroupPage";
import { TeachCoursesPage } from "./pages/TeachCoursesPage/TeachCoursesPage";
import { CoursePage } from "./pages/CoursePage/CoursePage";
import { MyCoursesPage } from "./pages/MyCoursesPage/MyCoursesPage";


export const Router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
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
      {
        path: '/groups/:groupId',
        element: <GroupPage />
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/courses/teaching/',
        element: <TeachCoursesPage />,
      },
      {
        path: '/courses/my/',
        element: <MyCoursesPage />,
      },
      {
        path: '/courses/:courseId',
        element: <CoursePage />
      },
    ],
  },
]);
