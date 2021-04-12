import Domicilio from "../models/Domicilio";

export const createDomicilio = async (req, res) => {
  try {
    const { observacion, delivery, sucursal } = req.body;
    const domicilio = new Domicilio({
      observacion,
      delivery,
      sucursal,
    });

    // saving the new user
    const savedDomicilio = await domicilio.save();

    return res.status(200).json({
      _id: savedDomicilio._id,
      observacion: savedDomicilio.observacion,
      delivery: savedDomicilio.delivery,
      Sucursal: savedDomicilio.sucursal,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getDomicilios = async (req, res) => {
  console.log('llego a cargar lista de domicilios')
  const domicilio = await Domicilio.find()
    .populate("sucursal")
    .populate("delivery");
    console.log(domicilio)
  return res.json(domicilio);
};

export const getUser = async (req, res) => {};
