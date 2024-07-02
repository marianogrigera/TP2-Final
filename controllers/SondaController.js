import Service from "../services/services.js"
const service = new Service();


class SondaController {
    
agregarSonda = (req, res) => {
    const { id, temperatura } = req.body;
    try {
        const data = service.agregarSonda( id, temperatura );
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ errorMsg: error.message });
    }
};

listarSondas = (req, res) => {
    const data = service.listarSondas();
    res.status(200).json(data);
};

buscarSondaPorId = (req, res) => {
    const { id } = req.params;
    try {
        const data = service.buscarSondaPorId(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
}

export default SondaController;