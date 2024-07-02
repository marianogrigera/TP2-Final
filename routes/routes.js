import { Router } from "express";
import SondaController from "../controllers/SondaController.js";

const router = Router();
const controller = new SondaController();

router.post('/add', controller.agregarSonda);
router.get('/listar', controller.listarSondas);
router.get('/:id', controller.buscarSondaPorId);

export default router;