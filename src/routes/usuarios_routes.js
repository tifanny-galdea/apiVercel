import { Router } from "express";

import { getUsuarios, postUsuarios, putUsuarios, patchUsuarios, deleteUsuarios } from "../controladores/usuarios_ctrl.js";

const router = Router()

router.get('/usuarios', getUsuarios);
router.post('/usuarios', postUsuarios);
router.put('/usuarios/:id', putUsuarios);
router.patch('/usuarios/:id', patchUsuarios);
router.delete('/usuarios/:id', deleteUsuarios);

export default router