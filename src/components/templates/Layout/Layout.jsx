import { Outlet } from "react-router-dom";
import Navbar from "../../modules/Navbar/Navbar";
import Container from "../../modules/Container/Container";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
