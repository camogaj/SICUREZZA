import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/**
 * Este componente va a recibir otro componente (el que queremos renderizar si estamos autenticados);
 *
 * Si no hay usuario = redirige a Login
 *
 * AuthRoute recibirá una prop <AuthRoute component={<ComponentePrivado />} />
 * Si hay usuario, retorna <ComponentePrivado />
 * Si no hay usuario, hace <Redirect /> a /login
 */

/**
 * Concepto del router de react
 *
 * <Link> -> Requiere la acción del usuario.
 * <Navigate /> -> No requiere la acción del usuario. Se redirige desde HTML.
 * navigate(); -> No requiere acción del usuario. Se redirige desde JS.
 */

const AuthRoute = ({ component }) => {
  const user = useSelector((state) => state.auth.user);

  if (user === null) return <div>Cargando....</div>;
  if (user === false) return <Navigate to="/login" />;
  if (user) return component;
};

export default AuthRoute;
