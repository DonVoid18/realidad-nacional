import Logo from "/logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-full w-11/12 max-w-[400px] flex-col py-10 sm:w-3/5 md:w-1/3 xl:w-3/12">
          <div className="flex w-full items-center justify-center">
            <Link to="/" className="flex select-none items-center gap-3">
              <img className="w-14" src={Logo} alt="Logo page" />
              <h1 className="text-2xl font-bold sm:text-3xl">IEEE UNHEVAL</h1>
            </Link>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-col gap-5">
              <div className="pt-3 ">
                <h2 className="text-center text-2xl font-bold">
                  Registra todos tus datos
                </h2>
              </div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-3">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Nombres</span>
                        {errors.fullName && (
                          <span className="text-xs text-error">
                            {errors.fullName?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="fullName"
                          {...register("fullName", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 3,
                              message: "Como minimo 3 caracteres",
                            },
                          })}
                          placeholder="Nombres completos"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Apellidos</span>
                        {errors.lastName && (
                          <span className="text-xs text-error">
                            {errors.lastName?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="lastName"
                          {...register("lastName", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 3,
                              message: "Como minimo 3 caracteres",
                            },
                          })}
                          placeholder="Ingresa tus apellidos"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Dirección</span>
                        {errors.address && (
                          <span className="text-xs text-error">
                            {errors.address?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="address"
                          {...register("address", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 3,
                              message: "Como minimo 3 caracteres",
                            },
                          })}
                          placeholder="Dirección de domicilio"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="addressEmail"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Correo electrónico</span>
                        {errors.addressEmail && (
                          <span className="text-xs text-error">
                            {errors.addressEmail?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="addressEmail"
                          {...register("addressEmail", {
                            required: "Este campo es requerido",
                            pattern: /^\S+@\S+$/i,
                            minLength: {
                              value: 3,
                              message: "Como minimo 3 caracteres",
                            },
                          })}
                          placeholder="example@gmail.com"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="docDNI"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>DNI</span>
                        {errors.docDNI && (
                          <span className="text-xs text-error">
                            {errors.docDNI?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="docDNI"
                          {...register("docDNI", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 8,
                              message: "Como minimo 8 caracteres",
                            },
                          })}
                          placeholder="12345678"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="flex items-center justify-between text-base font-semibold"
                      >
                        <span>Número de celular</span>
                        {errors.phoneNumber && (
                          <span className="text-xs text-error">
                            {errors.phoneNumber?.message}
                          </span>
                        )}
                      </label>
                      <div className="mt-1">
                        <input
                          id="phoneNumber"
                          {...register("phoneNumber", {
                            required: "Este campo es requerido",
                            minLength: {
                              value: 9,
                              message: "Como minimo 9 caracteres",
                            },
                          })}
                          placeholder="123456789"
                          className="input"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="btn w-full bg-primary">
                      Enviar solicitud
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
