import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/auth.api";

const EditRoom = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const [room, setRoom] = useState({});

  useEffect(() => {
    if (!user) return;
    setRoom(user.room.find((room) => room._id === id));
  }, [user, id]);

  const submitRoom = () => {
    // axios.put(`${BASE_URL}/rooms/${id}`, variableConLosNuevosDatos)
  };

  return (
    <div>
      <h1>Editar room!!</h1>
      <div>Nombre: {room.name}</div>
    </div>
  );
};

export default EditRoom;
