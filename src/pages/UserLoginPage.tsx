import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormControl } from "../components/FormControl";
import axios from "axios";
import { useAppDispatch } from "../app/hooks";
import toast from "react-hot-toast";
import { setUserData } from "../store/user";

export const UserLoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: any) => {
    setIsLoading(true);

    const promise = axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users/login`,
      data
    );

    toast.promise(promise, {
      loading: "Iniciando sesión...",
      success: "¡Inicio de sesión exitoso!",
      error: (err) =>
        `Error al iniciar sesión (${
          err.response?.data?.error || err.toString()
        })`,
    });

    promise
      .then((response) => {
        dispatch(setUserData(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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

          <button
            type="submit"
            className="btn btn-primary w-full max-w-xs mb-2"
            disabled={isLoading}
          >
            Iniciar sesión
          </button>
          <div className="prose prose-sm">
            ¿No tienes una cuenta? <Link to="/users/register">Regístrate</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
