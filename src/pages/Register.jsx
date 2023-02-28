import { useState } from "react";
import Logo from "/logo.svg";
import { Link } from "react-router-dom";
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
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col justify-between p-5">
          <div className="w-full flex justify-center items-center">
            <div className="w-[98%]">
              <Link
                to="/"
                className="w-max flex items-center gap-2 select-none"
              >
                <img className="w-14" src={Logo} alt="Logo page" />
                <h1 className="text-3xl font-bold">UNILIX</h1>
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full mini:w-96 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold text-center">¡Bienvenid@!</h2>
                <h2 className="text-3xl font-bold text-center">
                  Vamos a crear tu perfil
                </h2>
              </div>
              <div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3">
                    <div className="">
                      <label
                        htmlFor="textUser"
                        className="text-sm font-semibold"
                      >
                        Nombre de usuario
                      </label>
                      <div className="relative mt-1">
                        <input
                          className="placeholder:text-zinc-400 text-sm tracking-wider bg-black/5 w-full rounded-md py-2.5 px-4 focus:outline-none focus:border-teal-500 focus:ring-teal-500 focus:ring-2 ease-out duration-200"
                          placeholder="Introduce tu usuario"
                          type="text"
                          name="textUser"
                          id="textUser"
                          required
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="email" className="text-sm font-semibold">
                        Email
                      </label>
                      <div className="relative mt-1">
                        <input
                          className="placeholder:text-zinc-400 text-sm tracking-wider bg-black/5 w-full rounded-md py-2.5 px-4 focus:outline-none focus:border-teal-500 focus:ring-teal-500 focus:ring-2 ease-out duration-200"
                          placeholder="ejemplo@gmail.com"
                          type="email"
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="passw" className="text-sm font-semibold">
                        Contraseña
                      </label>
                      <div className="relative mt-1">
                        <input
                          className="placeholder:text-zinc-400 text-sm tracking-wider bg-black/5 w-full rounded-md py-2.5 pl-4 pr-10 focus:outline-none focus:border-teal-500 focus:ring-teal-500 focus:ring-2 ease-out duration-200"
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
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              className="w-5 cursor-pointer"
                            >
                              <title>Mostrar contraseña</title>
                              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
                              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
                            </svg>
                          ) : (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              focusable="false"
                              className="w-5 cursor-pointer"
                            >
                              <title>Ocultar contraseña</title>
                              <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"></path>
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="passw" className="text-sm font-semibold">
                        Repite la contraseña
                      </label>
                      <div className="relative mt-1">
                        <input
                          className="placeholder:text-zinc-400 text-sm tracking-wider bg-black/5 w-full rounded-md py-2.5 pl-4 pr-10 focus:outline-none focus:border-teal-500 focus:ring-teal-500 focus:ring-2 ease-out duration-200"
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
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              className="w-5 cursor-pointer"
                            >
                              <title>Mostrar contraseña</title>
                              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
                              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
                            </svg>
                          ) : (
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              focusable="false"
                              className="w-5 cursor-pointer"
                            >
                              <title>Ocultar contraseña</title>
                              <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"></path>
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <button className="btn-login bg-[#32D4A4]">
                    Iniciar sesión
                  </button>
                </div>
                <div>
                  <button className="btn-login bg-black">
                    Registrar nueva cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-black/70">
            Copyright © 2023 UNILIX Todos los derechos reservados.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
