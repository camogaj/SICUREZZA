const Room = require("./room.model");

const getAllRooms = async (req, res, next) => {
  try {
    const allRooms = await Room.find().populate("product");
    return res.status(200).json(allRooms);
  } catch (error) {
    return next(error);
  }
};

const getRoom = async (req, res, next) => {
  try {
    const { id } = req.params; //Forma de recoger la id con destructuring
    const room = await Room.findById(id).populate("product"); //Como la linea 7 de ciema model
    if (room) return res.status(200).json(room);
    else return res.status(404).json("Room no encontrado");
  } catch (error) {
    return next(error);
  }
};

const postRoom = async (req, res, next) => {
  try {
    const newRoom = new Room(req.body);
    const createRoom = await newRoom.save();
    return res.status(201).json(createRoom);
  } catch (error) {
    return next(error);
  }
};

const putRoom = async (req, res, next) => {
  try {
    const id = req.params.id;
    const room = new Room(req.body);
    room._id = id;
    const updateRoom = await Room.findByIdAndUpdate(id, room);
    return res.status(201).json(room);
  } catch (error) {
    return next(error);
  }
};

const deleteRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const roomDb = await Room.findByIdAndDelete(id);
    return res.status(200).json(roomDb);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllRooms, getRoom, postRoom, putRoom, deleteRoom };
