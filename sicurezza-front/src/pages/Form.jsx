import React, { useState } from "react";
import "./Form.scss";
import { useForm } from "react-hook-form";
import CallDevices from "./CallDevices";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/auth/auth.actions";

const Form = ({ rooms, setRooms }) => {
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const onSubmit = async (data, ev) => {
    const roomDb = await axios.post("http://localhost:4500/rooms", data);
    console.log(roomDb.data._id);
    const { password, room, ...restUser } = user;
    const updatedUser = { ...restUser, room: [...room, roomDb.data._id] };
    dispatch(updateUser(user._id, updatedUser));
    ev.target.reset();
  };
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/products")
      .then((response) => setDevices(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="intro">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p className="imput-form-text"> Name: </p>
          <input
            className="form-input-room"
            type="text"
            {...register("name")}
          />
        </label>
        <label>
          <p className="imput-form-text"> Product: </p>
          {devices && (
            <select className="form-input" type="text" {...register("product")}>
              {" "}
              <option></option>
              {devices.map((device) => (
                <option key={device._id} value={device._id}>
                  {device.name}
                </option>
              ))}
            </select>
          )}{" "}
        </label>
        <div>
          <button className="btn-product">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
