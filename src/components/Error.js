import React from "react";

const Error = () => {
  return (
    <div className="Error-container">
      <p className="text-404">404</p>
      <p className="text">Oups! La page que vous demandez n'existe pas.</p>
      <a className="link-home" href="/">
        Retourner sur la page d’accueil
      </a>
    </div>
  );
};

export default Error;
