const postUser = require("../../controllers/usuarios/postUser");


const postUserHandler = async (req, res) => {
    const { nombre, telefono, email, dni } = req.body;
    try {
        const usuarioCreado = await postUser(nombre, telefono, email,dni);
        return res.status(201).json({ message: usuarioCreado });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = postUserHandler;