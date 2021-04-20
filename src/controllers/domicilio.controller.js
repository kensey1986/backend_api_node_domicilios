import axios from "axios";
import Domicilio from "../models/Domicilio";

export const createDomicilio = async (req, res) => {
  console.log(req.body);
  try {
    const { observacion, delivery, sucursal, cliente } = req.body;
    const domicilio = new Domicilio({
      observacion,
      delivery,
      sucursal,
      cliente,
    });

    const resp = await axios.get("http://192.168.1.156:8080/articulos/queso");
    console.log(resp);
    // saving the new userques
    const savedDomicilio = await domicilio.save();

    return res.status(200).json({
      _id: savedDomicilio._id,
      observacion: savedDomicilio.observacion,
      delivery: savedDomicilio.delivery,
      Sucursal: savedDomicilio.sucursal,
      Cliente: savedDomicilio.cliente,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getDomicilios = async (req, res) => {
  const domicilio = await Domicilio.find()
    .populate("sucursal")
    .populate("delivery")
    .populate("cliente");

  console.log(domicilio);
  return res.json(domicilio);
};

export const updateDomicilioById = async (req, res) => {
  console.log(req.body);
  try {
    const updatedDomicilio = await Domicilio.findByIdAndUpdate(
      req.params.domicilioId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedDomicilio);
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (req, res) => {};
