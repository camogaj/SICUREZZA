import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import axios from "axios";
import { BASE_URL } from "../api/auth.api";
import "./Spaces.scss";
import { deleteRoom } from "../redux/auth/auth.actions";

function Spaces() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const deleteProduct = (id) => {
    axios
      .delete(`${BASE_URL}/rooms/${id}`)
      .then(() => dispatch(deleteRoom(id)));
  };

  return (
    <div className="spaces">
      <Form />
      <div className="rooms">
        {user &&
          user.room &&
          user.room.length > 0 &&
          user.room.map((room) => {
            return (
              <div key={room._id} className="room-form">
                <h3>{room?.name}</h3>
                {room?.product?.length > 0 &&
                  room.product.map((product) => (
                    <img
                      key={product._id}
                      src={product.img}
                      alt="product"
                    ></img>
                  ))}
                <div className="room-form__btn-group">
                  {/* <button className="form__btn" onClick={() => navigate(`/spaces/edit/${room._id}`)}>
                    Editar
                  </button> */}
                  <button className="form__btn" onClick={() => deleteProduct(room._id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Spaces;
