import HomePage from "./components/templates/HomePage/Index";
import Layout from "./components/templates/Layout/Layout";
import NotFoundPage from "./components/templates/NotFoundPage/Index";
import VerificationPage from "./components/templates/VerificationPage/Index";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/verification",
        element: <VerificationPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export { routes };
