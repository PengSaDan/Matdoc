import App from "App";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
  },
]);

export default route;
