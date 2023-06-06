import App from "App";
import Drug from "pages/Drug";
import DrugList from "pages/DrugList";
import Hospital from "pages/Hospital";
import HospitalList from "pages/HospitalList";
import Main from "pages/Main";
import MyPage from "pages/MyPage";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
    children: [
      {
        path: `/`,
        element: <Main />,
      },
      {
        path: `hospital`,
        element: <Hospital />,
      },
      {
        path: `hospitalList`,
        element: <HospitalList />,
      },
      {
        path: `drug`,
        element: <Drug />,
      },
      {
        path: `drugList`,
        element: <DrugList />
      },
      {
        path: `mypage`,
        element: <MyPage />,
      },
    ],
  },
]);

export default route;
