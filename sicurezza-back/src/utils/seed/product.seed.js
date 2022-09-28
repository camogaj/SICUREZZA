const mongoose = require("mongoose");
const db = require("../database/db");
const Product = require("../../api/products/product.model");

const initialProducts = [
  {
    name: "Raspberry Pi",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-reichelt.de%2Fbilder%2Fweb%2Fxxl_ws%2FA300%2FRASP_PI_4_B_8GB_01.png&f=1&nofb=1Hermanas Wachowski",
    description: "Procesador",
    type: "Tarjeta",
  },
  {
    name: "Arduino",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-reichelt.de%2Fbilder%2Fweb%2Fxxl_ws%2FB300%2FARDUINO_MEGA_A03.png&f=1&nofb=1",
    description: "Microcontrolador",
    type: "Tarjeta",
  },
  {
    name: "Sensor de movimiento",
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhub360.com.ng%2Fwp-content%2Fuploads%2F2015%2F01%2Fpir_module-1.png&f=1&nofb=1",
    description: "Detecta movimiento en la habitación",
    type: "Sensor",
  },
  {
    name: "Sensor de temperatura y humedad",
    img: "https://res.cloudinary.com/dulzlnv9t/image/upload/v1662818151/sicurezza/sensorTemp_fpjfr4.png",
    description: "Detecta los grados Cº y humedad de la casa",
    type: "Sensor",
  },
  {
    name: "Sensor láser",
    img: "https://res.cloudinary.com/dulzlnv9t/image/upload/v1662817270/sicurezza/sensor-laser_eujk2b.png",
    description: "Detecta movimiento discretamente",
    type: "Sensor",
  },
  {
    name: "Alarma",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fenertelcolombia.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fsirena-SIR24BL-600x560.png&f=1&nofb=1",
    description: "Indica ",
    type: "Actuadores",
  },
  {
    name: "Motores",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdns1.2rscms.com.br%2Fimgcache%2F2150%2F1000x%2Fcustom%2F2150%2Fuploads%2Fproduct%2Fphoto_5fa975ffd5df2.png&f=1&nofb=1",
    description: "Abre y cierra puertas",
    type: "Actuadores",
  },
  {
    name: "Bombillo",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fferreteriacalderon.com%2Fimages%2Fthumbs%2F0001477_bombillo-led-5-wats-e27-best-value-6000k-luz-blanca-e33414_550.png&f=1&nofb=1",
    description: "Enciende y apaga la luz",
    type: "Actuadores",
  },
  {
    name: "Cámara HD",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads.filipeflop.com%2F2020%2F04%2FCAM_6mm-HERO-min-768x576.png&f=1&nofb=1",
    description: "Muestra visión nítida",
    type: "Camara",
  },
  {
    name: "Cámara nocturna",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwecl-stem.com%2Fwp-content%2Fuploads%2F2018%2F04%2F058-32-6112-Square-600px-600x600.png&f=1&nofb=1",
    description: "Muestra visión nocturna",
    type: "Camara",
  },
];
mongoose
  .connect(db.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allProducts = await Product.find();
    if (allProducts.length) {
      console.log("Eliminando colección de productos...");
      await Product.collection.drop();
    } else
      console.log(
        "No hay movies en la base de datos... procediendo a añadir las Productos"
      );
  })
  .catch((error) =>
    console.log("Error al borrar la colleción de la base de datos", error)
  )
  .then(async () => {
    await Product.insertMany(initialProducts);
    console.log("Productos añadidos con éxito...");
  })
  .catch((error) =>
    console.log("Error al añadir Productos a la base de datos", error)
  )
  .finally(() => mongoose.disconnect());
