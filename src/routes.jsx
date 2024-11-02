import HomePage from "./components/templates/Home/Index";
import Layout from "./components/templates/Layout/Layout";
import NotFoundPage from "./components/templates/NotFoundPage/Index";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export { routes };
