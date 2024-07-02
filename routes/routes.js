import { Router } from "express";
import Controller from "../controllers/SondaController.js";

const router = Router();
const controller = new Controller();

router.post('/add', controller.agregarSonda);
router.get('/listar', controller.listarSondas);
router.get('/:id', controller.buscarSondaPorId);

export default router;