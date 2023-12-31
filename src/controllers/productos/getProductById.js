const { Producto } = require("../../db");

const getProductById = async (id) => {
  const data = await Producto.findByPk(id);
  if (!id)
    throw new Error(`El id ${id} no es válido para mostrar el producto.`);
  return data;
};
module.exports = getProductById;
