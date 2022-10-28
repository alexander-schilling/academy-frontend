import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { logoutUser } from "../../store/user";

export const UserDropdownComponent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    toast.success("Cerraste sesión con éxito");
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar p-3">
        <FontAwesomeIcon icon={faUser} className="h-full" />
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <div onClick={logout}>Cerrar sesión</div>
        </li>
      </ul>
    </div>
  );
};
