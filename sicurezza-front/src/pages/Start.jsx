import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import image1 from "../assets/greenUsers.svg";
import image from "../assets/checkUsers.svg";
import image2 from "../assets/bigSpaces.svg";
import image3 from "../assets/lightOn.png";
import image4 from "../assets/lightOff.png";
import Footer from "../components/Footer";
import "./Start.scss";

const Start = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/rooms")
      .then((response) => setRooms(response.data))
      .catch((error) => console.error(error));
  }, []);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="b-all">
        <div className="b-big-div">
          <div className="b-img">
            <img src={image1} alt="green users" />
          </div>
          <div className="b-otherdevices">
            <h2> Otros Dispositivos </h2>
            <h3> {user?.room.length}</h3>
            {/* <h2> {user.dispositivos} </h2>  */}
            {/* ESTO ESTÁ MAL, SEGURAMENTE LO DEJO ASÍ PARA CAMBIARLO CUANDO ESTÉ EL BACK */}
          </div>
          
            <div className="b-img">
              <img src={image} alt="check users" />
            </div>

            <div className="b-connect">
              <h2> Conectado </h2>
            </div>
          

          <div className="b-img">
            <img src={image2} alt="spaces" />
          </div>
          <div className="b-spaces">
            <h2> Espacio </h2>
            <h3> Jardín </h3>
            {/* console.log ({user.room}) */}
            {/* <h2> {user.dispositivos} </h2>  */}
            {/* ESTO ESTÁ MAL, LO DEJO ASÍ PARA CAMBIARLO CUANDO ESTÉ EL BACK */}
          </div>
        </div>
        <div className="b-text">
          <div className="b-title">
            <h2> Bienvenido {user?.name} 👋​ </h2>
            {/* <h2>El nombre del producto es {product.name} </h2> */}
          </div>
          <div className="b-light-father">
            <div className="b-light">
              <img src={image3} alt="light on" />
              <h2>ENCENDER</h2>
            </div>
            <div className="b-light">
              <img src={image4} alt="light off" />
              <h2>APAGAR</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="fake-footer"></div>
    </>
  );
};

export default Start;
