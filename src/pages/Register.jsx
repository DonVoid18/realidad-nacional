import { useState } from "react";
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
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-full">
        <div className="flex h-full w-full flex-col justify-between p-5">
          <div className="flex w-full items-center justify-center">
            <Link to="/" className="flex select-none items-center gap-3">
              <img className="w-14" src={Logo} alt="Logo page" />
              <h1 className="text-2xl font-bold sm:text-3xl">IEEE UNHEVAL</h1>
            </Link>
          </div>
          <div className="flex w-full justify-center">
            <div className="mini:w-96 flex w-full flex-col gap-8">
              <div>
                <h2 className="pt-3 text-center text-2xl font-bold">
                  ¡Bienvenid@! Registra tus datos
                </h2>
              </div>
              <div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3">
                    <div className="">
                      <label
                        htmlFor="textUser"
                        className="text-base font-semibold"
                      >
                        Nombres
                      </label>
                      <div className="relative mt-1">
                        <input
                          className="input"
                          placeholder="Introduce tu usuario"
                          type="text"
                          name="textUser"
                          id="textUser"
                          required
                        />
                      </div>
                    </div>

                    <div className="">
                      <label
                        htmlFor="email"
                        className="text-base font-semibold"
                      >
                        Apellidos
                      </label>
                      <div className="relative mt-1">
                        <input
                          className="input"
                          placeholder="ejemplo@gmail.com"
                          type="email"
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="passw"
                        className="text-base font-semibold"
                      >
                        Contraseña
                      </label>
                      <div className="relative mt-1">
                        <input
                          className="input"
                          placeholder="Introduce una contraseña"
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
                    <div>
                      <label
                        htmlFor="passw"
                        className="text-base font-semibold"
                      >
                        Repite la contraseña
                      </label>
                      <div className="relative mt-1">
                        <input
                          className="input"
                          placeholder="Debe coincidir con la anterior"
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
                    Enviar datos
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 text-center text-base text-colorTextSecundary ">
            Copyright © 2023 IEEE UNHEVAL Todos los derechos reservados.
          </div>
          <div className="pt-5 "></div>
        </div>
      </div>
    </div>
  );
};
export default Login;
