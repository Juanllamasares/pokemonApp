import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const Header = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="navbar navbar-dark bg-black mb-4 px-4">
      <span className="navbar-brand">
        <LinkContainer to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt=""
            className="logo-app"
          />
        </LinkContainer>
      </span>

      <LinkContainer to="/mypokemons">
          <button className="btn btn-outline-primary">Ver Pokemons Capturados</button>
        </LinkContainer>
      <button className="btn btn-outline-primary" onClick={onLogout}>
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  );
};
