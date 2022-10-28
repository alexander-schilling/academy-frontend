import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormControl } from "../components/FormControl";

export const UserLoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="container mx-auto py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <div className="prose prose-md text-center mb-6">
            <h1>Bienvenid@ de vuelta</h1>
            <p>Un nuevo curso te espera</p>
          </div>

          <FormControl
            topLabel="Nombre de usuario"
            placeholder="john_doe"
            register={register("username", {
              required: true,
            })}
            errors={errors.username}
          />

          <FormControl
            topLabel="Contraseña"
            inputType="password"
            register={register("password", {
              required: true,
            })}
            errors={errors.password}
          />

          <input
            type="submit"
            className="btn btn-primary w-full max-w-xs mb-2"
            value="Iniciar sesión"
          />
          <div className="prose prose-sm">
            ¿No tienes una cuenta? <Link to="/users/register">Regístrate</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
