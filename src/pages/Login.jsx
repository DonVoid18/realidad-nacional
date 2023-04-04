import { useState } from "react";
import ImageLogin from "../assets/imageLogin.jpg";
import Logo from "/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const [mostrarPass, setMostrarPass] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const mostrarPassword = () => {
    setMostrarPass(!mostrarPass);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-full grid xl:grid-cols-2">
        <div className="w-full h-full flex flex-col justify-between p-5">
          <div className="w-full flex justify-center items-center">
            <div className="w-[98%]">
              <Link to="/" className="flex items-center gap-3 select-none">
                <img className="w-14" src={Logo} alt="Logo page" />
                <h1 className="text-2xl sm:text-3xl font-bold">IEEE UNHEVAL</h1>
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-sm flex flex-col gap-8">
              <div>
                <h2 className="text-4xl font-bold text-center xl:text-left">
                  ¡Bienvenid@!
                </h2>
              </div>
              <div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3">
                    <div className="">
                      <label
                        htmlFor="usuario"
                        className="text-base font-semibold"
                      >
                        Usuario
                      </label>
                      <div className="relative mt-1">
                        <input
                          className="input"
                          placeholder="Introduce tu usuario"
                          type="usuario"
                          name="usuario"
                          id="usuario"
                          required
                        />
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="passw"
                        className="text-base font-semibold"
                      >
                        Contraseña
                      </label>
                      <div className="relative mt-1">
                        <input
                          className="input"
                          placeholder="Introduce tu contraseña"
                          type={mostrarPass ? "password" : "text"}
                          name="passw"
                          id="passw"
                          required
                        />
                        <div
                          className="absolute inset-y-0 right-2.5 flex items-center"
                          onClick={() => mostrarPassword()}
                        >
                          {mostrarPass ? (
                            <FontAwesomeIcon
                              icon={faEye}
                              className="cursor-pointer"
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faEyeSlash}
                              className="cursor-pointer"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <button className="btn w-full bg-primary">
                    Iniciar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-base text-colorTextSecundary">
            Copyright © 2023 IEEE UNHEVAL Todos los derechos reservados.
          </div>
        </div>
        <div className="w-full h-full hidden xl:block">
          <img
            className="w-full h-full object-cover"
            src={ImageLogin}
            alt="Imagen Login"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
