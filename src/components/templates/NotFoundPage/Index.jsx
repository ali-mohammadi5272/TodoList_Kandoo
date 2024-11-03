import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  useLayoutEffect(() => {
    document.title = "404-Not Found";
  }, []);

  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-10">
      <h1 className="text-[13rem] text-[firebrick]">404</h1>
      <p className="text-5xl">Page not found</p>
      <Link
        className="text-3xl text-black border-2 font-bold border-black pt-1 pb-2 px-3 rounded-md no-underline hover:bg-black hover:text-white"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
