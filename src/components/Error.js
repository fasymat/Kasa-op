import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="Error-container">
      <p className="text-404">404</p>
      <p className="text">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="link-home" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
