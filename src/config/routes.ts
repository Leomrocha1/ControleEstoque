import { Router, Request, Response } from "express";
import { GerenciamentoController } from "../controller/GerenciamentoController"



const router = Router( );
const gerenciamentocontroller = new GerenciamentoController( );

router.get("/estoque/listar", gerenciamentocontroller.listar);
router.get("/estoque/buscar:id", gerenciamentocontroller.buscarPorId);
router.post("/entrada/cadastrar", gerenciamentocontroller.entradaProduto);

export { router };