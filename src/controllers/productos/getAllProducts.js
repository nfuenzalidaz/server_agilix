const { Producto } = require("../../db");

const getAllProducts = async () => {
  const productos = await Producto.findAll({
    attributes: ["id", "nombre", "img", "precio","estado"],
  });
  if (productos.length === 0)
    throw new Error("No se encontraron productos para mostrar.");
  return productos;
};

module.exports = getAllProducts;