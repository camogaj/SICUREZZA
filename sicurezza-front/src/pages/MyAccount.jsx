import Footer from "../components/Footer";
import "./MyAccount.scss";
import { useDispatch, useSelector } from "react-redux";

const MyAccount = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="my-div">
        <div className="my-title">
          <h1>Mi cuenta</h1>
        </div>
        <div className="my-inside">
          <h2> Nombre de usuario​ </h2>
          <h4> {user.name} </h4>
        </div>
        <div className="my-inside">
          <h2> Correo Electrónico​ </h2>
          <h4> {user.email} </h4>
        </div>
        <div className="my-inside">
          <h2> Contraseña​ </h2>
          <h4> ★★★★★★★★★★ </h4>
        </div>
        <div className="my-inside">
          <h2> Número de dispositivos​ </h2>
          <h4> 2 </h4>
        </div>
        <div className="my-inside">
          <h2> Creación de la cuenta​ </h2>
          <h4> {user.createdAt} </h4>
        </div>
        <div className="my-inside">
          <h2> Última modificación​ </h2>
          <h4> {user.updatedAt} </h4>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
