import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageLogin from "../assets/imageLogin.jpg";
import Logo from "/logo.svg";
const Login = () => {
  const [mostrarPass, setMostrarPass] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const mostrarPassword = () => {
    setMostrarPass(!mostrarPass);
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid h-full w-full xl:grid-cols-2">
        <div className="flex h-full w-full flex-col justify-between p-5">
          <div className="flex w-full items-center justify-center">
            <div className="w-[98%]">
              <Link to="/" className="flex select-none items-center gap-3">
                <img className="w-14" src={Logo} alt="Logo page" />
                <h1 className="text-2xl font-bold sm:text-3xl">UNHEVAL</h1>
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex w-full max-w-sm flex-col gap-8">
              <div>
                <h2 className="text-center text-4xl font-bold xl:text-left">
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
            Copyright © 2023 UNHEVAL Todos los derechos reservados.
          </div>
        </div>
        <div className="hidden h-full w-full xl:block">
          <img
            className="h-full w-full object-cover"
            src={ImageLogin}
            alt="Imagen Login"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
