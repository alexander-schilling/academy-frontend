import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const HomePage: FunctionComponent = () => {
  return (
    <article className="container mx-auto prose prose-xl py-10 px-4">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-center mb-4">
            Bienvenid@ a la <i>Academia</i>
          </h1>
          <p className="text-center">
            En Academia encontrarás los mejores cursos para elevar tus
            conocimientos, habilidades y carrera profesional
          </p>
          <Link to="/courses" className="btn btn-primary">
            Ver cursos
          </Link>
        </div>
        <div className="right-content">
          <img
            src="https://i.imgur.com/iwavG6X.png"
            className="rounded-md"
            alt="Persona estudiando"
          />
        </div>
      </div>
    </article>
  );
};
