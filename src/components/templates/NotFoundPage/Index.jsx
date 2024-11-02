import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-8">
      <h1 className="text-[200px] text-[firebrick]">404</h1>
      <p className="text-3xl">Page not found</p>
      <Link
        className="text-3xl bg-black border-2 border-black pt-1 pb-2 px-3 rounded-md text-white no-underline hover:bg-transparent hover:text-black"
        to="/"
      >
        Login
      </Link>
    </div>
  );
};

export default NotFoundPage;
