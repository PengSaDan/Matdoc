import App from "App";
import Drug from "pages/Drug";
import Hospital from "pages/Hospital";
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
        path: `drug`,
        element: <Drug />,
      },
      {
        path: `mypage`,
        element: <MyPage />,
      },
    ],
  },
]);

export default route;
