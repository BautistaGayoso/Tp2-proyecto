import { Router } from "express";
import TorneoF1Controller from "../controllers/TorneoF1Controller.js";

const router = Router();

const torneoF1Controller = new TorneoF1Controller();

router.post("/:userId",torneoF1Controller.createTorneo);

router.post("/:torneoId/participantes", torneoF1Controller.joinTorneo)

router.get("/",torneoF1Controller.getAllTorneos);

router.get("/:id",torneoF1Controller.getTorneoById);

router.get("/:torneoId/participantes", torneoF1Controller.getParticipantes)

router.put("/:id",torneoF1Controller.updateTorneo);

router.delete("/:id",torneoF1Controller.deleteTorneo);

export default router;