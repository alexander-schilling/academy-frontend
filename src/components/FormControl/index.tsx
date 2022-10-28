import React from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";

interface FormControlProps {
  topLabel?: string;
  topLabelAlt?: string;
  bottomLabel?: string;
  bottomLabelAlt?: string;
  placeholder?: string;
  inputType?: string;
  register: UseFormRegisterReturn<string>;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export const FormControl = ({
  topLabel,
  topLabelAlt,
  bottomLabel,
  bottomLabelAlt,
  placeholder,
  inputType,
  register,
  errors,
}: FormControlProps) => {
  const getError = () => {
    if (errors?.message) return errors.message.toString();

    switch (errors?.type) {
      case "required":
        return "Este campo es requerido";
      case "min":
        return "Este campo no cumple con el valor mínimo";
      case "max":
        return "Este campo no cumple con el valor máximo";
      case "minLength":
        return "Este campo no cumple con el largo mínimo";
      case "maxLength":
        return "Este campo no cumple con el largo máximo";
      case "pattern":
        return "Este campo no cumple con el patrón de caracteres";
      default:
        return "Este campo no es válido";
    }
  };

  const hasErrors = errors ? true : false;

  return (
    <div className="form-control w-full max-w-xs mb-3">
      <label className="label">
        <span className="label-text font-bold">{topLabel}</span>
        <span className="label-text-alt">{topLabelAlt}</span>
      </label>
      <input
        type={inputType || "text"}
        placeholder={placeholder}
        className={`input input-bordered w-full max-w-xs ${
          hasErrors ? "input-error" : ""
        }`}
        {...register}
      />
      <label className="label">
        <span className="label-text-alt">{bottomLabel}</span>
        <span className="label-text-alt">{bottomLabelAlt}</span>
      </label>
      {errors && <p className="text-error text-xs italic">{getError()}</p>}
    </div>
  );
};
