import { Router, Request, Response } from "express";
import { GerenciamentoController } from "../controller/GerenciamentoController"



const router = Router( );
const gerenciamentocontroller = new GerenciamentoController( );

// ------------PRODUTO-----------------

//cadastro de produto
router.post("/controle/cadastrar/produto", gerenciamentocontroller.cadastrarProduto);

//buscar produto pelo NOME
router.get("/controle/produto/buscar/:nomeProduto", gerenciamentocontroller.buscarProduto);

//alterar produto
router.put("/controle/alterar/produto/:id", gerenciamentocontroller.alterarProduto);


export { router };