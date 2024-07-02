import Sonda from "../models/Sonda.js";
import { validateSonda, validateId } from "../utils/validate.js"
const sonda = new Sonda();

class Service {

    agregarSonda = (id, temperatura) => {
        const sonda = { id, temperatura };
        validateSonda(sonda);
        return sonda.crearSonda(sonda);
    };
    
    listarSondas = () => {
        return sonda.listar();
    };
    
    buscarSondaPorId = (id) => {
        validateId(id);
        return sonda.listarPorId(id);
    };
};

export default Service;
