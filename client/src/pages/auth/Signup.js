import React, { useState } from "react";
import { useAuth } from "../../context/providers/AuthContext";
import { spinner } from "../../components/icons/index";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup, isLoading, errorMessage } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await signup(user);
      if (userResponse) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="section">
      <h1 className="title-card">Registrarse</h1>
      {errorMessage && <h1>{errorMessage}</h1>}
      <form onSubmit={handleSubmit}>
        <div className="input-label">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="input-label">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="******"
            onChange={handleChange}
          />
        </div>
        <button disabled={!user.email || !user.password || isLoading}>
          {isLoading ? (
            <span>
              {spinner}
              Cargando...
            </span>
          ) : (
            <span>Registrar</span>
          )}
        </button>
        <div className="register">
          <Link to="/auth/signin">Iniciar sesion...</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
