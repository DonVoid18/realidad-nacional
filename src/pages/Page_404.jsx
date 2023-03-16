import Image404 from "../assets/page_404.svg";
import { Link } from "react-router-dom";
const Page_404 = () => {
  return (
    <div className="w-full min-h-screen pt-40 pb-24 flex flex-col items-center overflow-hidden text-main bg-colorSection_1 text-center">
      <img src={Image404} alt="404 Not Found" className="w-96 h-96 mb-8" />
      <h1 className="text-4xl font-bold mb-2">Oops! Page not found.</h1>
      <p className="text-lg text-colorTextSecundary mb-8">
        The page you are looking for doesn't exist.
      </p>
      <Link className="btn bg-btnColorSecondary" to="/">
        Go back to home
      </Link>
    </div>
  );
};
export default Page_404;
