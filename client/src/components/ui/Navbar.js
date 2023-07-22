import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/providers/AuthContext";
import "../../styles/homePage.css";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <>
      <header>
        <Link to="/">
          <h1>PCStore</h1>
        </Link>
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
                  <Link to="/" onClick={logout}>
                    Loguot
                  </Link>
                </li>
                <li>
                  <p>Carrito</p>
                </li>
              </ul>
            ) : (
              <li>
                <Link to="/auth/signin">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
