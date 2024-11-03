import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black py-4 px-3">
      <NavLink
        className={({ isActive }) =>
          `hover:text-orange-600 font-bold text-white text-xl inline-block px-4 py-1 rounded-md ${
            isActive ? "!text-black bg-white" : ""
          }`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:text-orange-600 font-bold text-white text-xl inline-block px-4 py-1 rounded-md ${
            isActive ? "!text-black bg-white" : ""
          }`
        }
        to="/verification"
      >
        Verification
      </NavLink>
    </nav>
  );
};

export default Navbar;
