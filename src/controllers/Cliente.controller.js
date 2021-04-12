import Cliente from "../models/Cliente";

export const createCliente = async (req, res) => {
 
  try {
    const {
      username,
      name,
      email,
      sucursal,
      nacimiento,
      documento,
      direccion,
      barrio,
      celular,
      fijo,
      apellido
    } = req.body;
    // creating a new User

    const cliente = new Cliente({
      username,
      name,
      email,
      sucursal,
      nacimiento,
      documento,
      direccion,
      barrio,
      celular,
      fijo,
      apellido
    });
    // saving the new user
    const savedCliente = await cliente.save();

    return res.status(200).json({
      _id: savedCliente._id,
      username: savedCliente.username,
      sucursal: savedCliente.sucursal,
      name: savedCliente.name,
      email: savedCliente.email,
      nacimiento: savedCliente.nacimiento,
      documento: savedCliente.documento,
      direccion: savedCliente.direccion,
      barrio: savedCliente.barrio,
      celular: savedCliente.celular,
      fijo: savedCliente.fijo,
      email: savedCliente.email,
      apellido: savedCliente.apellido,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateClienteById = async (req, res) => {
  try {
    const updatedCliente = await Cliente.findByIdAndUpdate(
      req.params.clienteId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedCliente);
  } catch (error) {
    console.error(error);
  }
};

export const getCliente = async (req, res) => {
  const clienteId = req.params.clienteId;
  // const rolesFound = await Role.find({ name: { $in: roles } });
  const cliente = await Cliente.findOne({ _id: { $in: clienteId } });
  return res.json(cliente);
};

export const getClientes = async (req, res) => {
  const clientes = await Cliente.find();
  return res.json(clientes);
};
