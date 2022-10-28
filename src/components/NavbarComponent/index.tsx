import React from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { UserDropdownComponent } from "./UserDropdownComponent";

const NavbarComponent = () => {
  const isLoggedIn = false;

  const getNavbarStart = () => {
    return (
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-3">
            <FontAwesomeIcon icon={faBars} className="h-full" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <Link to="/courses">Cursos</Link>
            </li>
            {!isLoggedIn && (
              <>
                <li className="md:hidden">
                  <Link to="/users/login">Iniciar sesión</Link>
                </li>
                <li className="md:hidden">
                  <Link to="/users/register">Registrarse</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Academia
        </Link>
      </div>
    );
  };

  const getNavbarEnd = () => {
    if (isLoggedIn) {
      return (
        <div className="navbar-end">
          <UserDropdownComponent />
        </div>
      );
    }

    return (
      <div className="hidden md:flex navbar-end gap-2">
        <Link to="/users/login" className="btn btn-ghost">
          Iniciar sesión
        </Link>
        <Link to="/users/register" className="btn btn-primary">
          Registrarse
        </Link>
      </div>
    );
  };

  return (
    <div className="navbar bg-base-200">
      {getNavbarStart()}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/courses">Cursos</Link>
          </li>
        </ul>
      </div>
      {getNavbarEnd()}
    </div>
  );
};

export default NavbarComponent;
