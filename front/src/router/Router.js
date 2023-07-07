import App from "App";
import Drug from "pages/Drug";
import DrugDetail from "pages/DrugDetail";
import DrugList from "pages/DrugList";
import Hospital from "pages/Hospital";
import HospitalList from "pages/HospitalList";
import HosptialDetail from "pages/HosptialDetail";
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
        path: `hospitallist`,
        element: <HospitalList />,
      },
      {
        path: `hospitaldetail/:hospitalId`,
        element: <HosptialDetail />,
      },
      {
        path: `drug`,
        element: <Drug />,
      },
      {
        path: `druglist`,
        element: <DrugList />,
      },
      {
        path: `drugdetail/:drugId`,
        element: <DrugDetail />,
      },
      {
        path: `mypage/:type`,
        element: <MyPage />,
      },
    ],
  },
]);

export default route;
