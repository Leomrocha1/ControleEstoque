import { Router, Request, Response } from "express";
import { GerenciamentoController } from "../controller/GerenciamentoController"

const router = Router( );
const gerenciamentocontroller = new GerenciamentoController( );

router.get("/estoque/listar", gerenciamentocontroller.listar);

export { router };