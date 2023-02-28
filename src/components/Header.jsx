import { useState } from "react";
import Logo from "/logo.svg";
import BtnBurger from "./buttonsToggle/BtnBurger";
import BtnClosed from "./buttonsToggle/BtnClosed";
import { Link } from "react-router-dom";
const DashHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="text-header z-10 w-full h-header flex justify-center items-center fixed top-0 bg-white">
        <header className="w-containerWitdh max-w-containerMax flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 select-none">
            <img className="w-14" src={Logo} alt="Logo page" />
            <h1 className="text-2xl sm:text-3xl font-bold">IEEE UNHEVAL</h1>
          </Link>
          <div className="flex items-center justify-center xl:hidden">
            <BtnBurger funct1={setToggleMenu} />
          </div>
          <div className="hidden xl:block">
            <nav>
              <ul className="flex gap-10">
                <li>
                  <Link to="" className="link">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link to="" className="link">
                    ¿Cómo ser miembro?
                  </Link>
                </li>
                <li>
                  <Link to="" className="link">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link to="" className="link">
                    Noticias
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden xl:block">
            <nav>
              <ul className="flex gap-4">
                <li>
                  <Link
                    className="btn bg-btnColorSecondary"
                    to="/login"
                  >
                    Ir al campus
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn bg-primary"
                    to="/register"
                  >
                    Empieza ya
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
      {/* header nav toggle */}
      <div
        className={`fixed top-0 text-header z-20 w-full h-screen flex flex-col items-center bg-white xl:hidden ease-in-out duration-500 ${
          toggleMenu ? `left-0` : "left-full"
        }`}
      >
        <div className="h-header w-containerWitdh flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 select-none">
            <img className="w-14" src={Logo} alt="Logo page" />
            <h1 className="text-2xl sm:text-3xl font-bold">IEEE UNHEVAL</h1>
          </Link>
          <div className="flex items-center justify-center">
            <BtnClosed funct1={setToggleMenu} />
          </div>
        </div>
        <div className="w-11/12 py-4 flex flex-col gap-12">
          <div>
            <nav>
              <ul className="flex gap-10 flex-col justify-center items-center">
                <li>
                  <Link to="" className="link">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link to="" className="link">
                    ¿Cómo ser miembro?
                  </Link>
                </li>
                <li>
                  <Link to="" className="link">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link to="" className="link">
                    Noticias
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <nav className="">
              <ul className="grid gap-4 sm:grid-cols-2">
                <li>
                  <Link
                    className="btn block text-center bg-btnColorSecondary hover:opacity-70"
                    to="/login"
                  >
                    Ir al campus
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn block text-center bg-primary hover:opacity-70"
                    to="/register"
                  >
                    Empieza ya
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashHeader;
