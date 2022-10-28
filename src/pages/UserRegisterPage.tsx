import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormControl } from "../components/FormControl";

export const UserRegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="container mx-auto py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center">
          <div className="prose prose-md text-center mb-6">
            <h1>Bienvenid@</h1>
            <p>¿Preparado para potenciar tu carrera?</p>
          </div>

          <FormControl
            topLabel="Nombre de usuario"
            bottomLabel="Debe tener entre 3 y 32 caracteres y puede contener solo letras, números y guiones"
            placeholder="john_doe"
            register={register("username", {
              required: true,
              minLength: 3,
              maxLength: 32,
              pattern: /^[a-zA-Z0-9_-]*$/,
            })}
            errors={errors.username}
          />

          <FormControl
            topLabel="Nombre"
            placeholder="John"
            register={register("firstName", {
              required: true,
              minLength: 1,
              maxLength: 64,
            })}
            errors={errors.firstName}
          />

          <FormControl
            topLabel="Apellido"
            placeholder="Doe"
            register={register("lastName", {
              required: true,
              minLength: 1,
              maxLength: 64,
            })}
            errors={errors.lastName}
          />

          <FormControl
            topLabel="Contraseña"
            bottomLabel="Debe ser mayor a 5 caracteres, contener una mayúscula, una minúscula, un número y un caracter especial"
            inputType="password"
            register={register("password", {
              required: true,
              minLength: 6,
              maxLength: 32,
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
            })}
            errors={errors.password}
          />

          <FormControl
            topLabel="Confirmar contraseña"
            inputType="password"
            register={register("passwordConfirmation", {
              required: true,
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })}
            errors={errors.passwordConfirmation}
          />

          <input
            type="submit"
            className="btn btn-primary w-full max-w-xs mb-2"
            value="Registrarse"
          />
          <div className="prose prose-sm">
            ¿Ya tienes una cuenta? <Link to="/users/login">Inicia sesión</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
