import Delivery from "../models/Delivery";


export const createDelivery = async (req, res) => {
  
  try {
    const { username, name, email, password} = req.body;
    // creating a new User
    const delivery = new Delivery({
      username,
      name,
      email,
      password,
      
    });
    // encrypting password
    delivery.password = await Delivery.encryptPassword(delivery.password);

    // saving the new user
    const savedDelivery = await delivery.save();

    return res.status(200).json({
      _id: savedDelivery._id,
      username: savedDelivery.username,
      
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateDeliveryById = async (req, res) => {
  try {
    const {  password} = req.body;
    console.log(password)
    if (password !== undefined) {
      req.body.password = await Delivery.encryptPassword(password);
    }
    const updatedDelivery = await Delivery.findByIdAndUpdate(
      req.params.deliveryId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedDelivery);
  } catch (error) {
    console.error(error);
  }
   
};

export const getDelivery = async (req, res) => {};

export const getDeliverys = async (req, res) => {
  const delivery = await Delivery.find();
  return res.json(delivery);
};
