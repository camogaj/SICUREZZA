import axios from "axios";
import { useEffect, useState } from "react";
import "./CallDevice.scss";

const CallDevices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/products")
      .then((response) => setDevices(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="father">
        {devices.map((device) => (
          <div className="devices">
            <h3> {device.name} </h3>
            <img src={device.img} alt="device" />
            <h4>{device.description}</h4>
            <h4>{device.type}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default CallDevices;
