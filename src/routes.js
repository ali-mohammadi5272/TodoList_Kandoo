import HomePage from "./components/templates/Home/Index";
import Layout from "./components/templates/Layout/Layout";

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
];

export { routes };
