import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/providers/AuthContext";
import "../../styles/header.css";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <header>
      <Link to="/" className="logo">
        <img
          src="https://i.postimg.cc/TYwXhn4G/logo-rm.png"
          alt="Logo"
          className="logo-img"
        />
      </Link>
      <h1>Bienvenido</h1>
      <nav>
        <ul>
          {isLoggedIn ? (
            <ul>
              <li>
                <Link to="/product/new">Nuevo Producto</Link>
              </li>
              <li>
                <Link to="/">Perfil</Link>
              </li>
              <li>
                <Link to="/cart">Carrito</Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>
                  Loguot
                </Link>
              </li>
            </ul>
          ) : (
            <>
              <li>
                <Link to="/products">Productos</Link>
              </li>

              <li>
                <Link to="/auth/signin">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
