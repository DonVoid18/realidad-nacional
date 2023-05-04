import Image404 from "../assets/page_404.svg";
import { Link } from "react-router-dom";
const Page_404 = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-hidden pt-40 pb-24 text-center text-main">
      <img src={Image404} alt="404 Not Found" className="mb-8 h-96 w-96" />
      <h1 className="mb-2 text-4xl font-bold">Oops! Page not found.</h1>
      <p className="mb-8 text-lg text-colorTextSecundary">
        The page you are looking for doesn't exist.
      </p>
      <Link className="btn bg-btnColorSecondary" to="/">
        Go back to home
      </Link>
    </div>
  );
};
export default Page_404;
