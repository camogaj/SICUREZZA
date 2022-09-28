import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/auth/auth.actions";
import { Link } from "react-router-dom";
import secuLogo from "../assets/sicurezza-logo.png";
import signUp from "../assets/blueFootPc-01.svg";
import "./Login.scss";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLoading } = useSelector((state) => state.auth);
  const [form, setForm] = useState(INITIAL_STATE);

  const submit = (ev) => {
    ev.preventDefault();
    dispatch(loginUser(form, navigate)); // lanzamos la función loginUser que recibimos por props y que conecta con nuestra API, tratamos de loguear al usuario
  };

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <h1 className="login-title">Bienvenido a</h1>
      <img src={secuLogo} width="350px" alt="sicurezza logo" />
      {isLoading && <h2>Logeando usuario...</h2>}
      {!isLoading && (
        <form onSubmit={submit}>
          <label>
            <p className="imput-up-text">Email</p>
            <input
              className="form-input"
              type="email"
              name="email"
              value={form.email}
              onChange={changeInput}
              required
            />
          </label>
          <label>
            <p className="imput-up-text">Password</p>
            <input
              className="form-input"
              type="password"
              name="password"
              value={form.password}
              onChange={changeInput}
              required
              pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
              title="La contraseña no cumple las reglas. 8 carácteres, 1 mayúscula y 1 número"
            />
          </label>
          <div>
            <button className="btn-access" type="submit">
              Acceder
            </button>
          </div>
        </form>
      )}
      <div>
        <Link to="/register">
          <button className="btn-access">Register</button>
        </Link>
      </div>
      {error && <h2 className="error">{error}</h2>}{" "}
      {/*si hay error nos lo muestra*/}
      <div className="signUpImage">
        <img  src={signUp} alt="city" />
      </div>
    </div>
  );
};

export default Login;
