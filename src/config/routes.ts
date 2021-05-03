import { Router, Request, Response } from "express";
import { GerenciamentoController } from "../controller/GerenciamentoController"



const router = Router( );
const gerenciamentocontroller = new GerenciamentoController( );

// ------------PRODUTO-----------------


//total de produtos
router.get("/controle/total/produto", gerenciamentocontroller.produtosTotal);

//cadastro de produto
router.post("/controle/cadastrar/produto", gerenciamentocontroller.cadastrarProduto);

//listar produtos cadastrados
router.get("/controle/listar/produto", gerenciamentocontroller.listarProduto);

//buscar produto pelo NOME
router.get("/controle/produto/buscar/:nomeProduto", gerenciamentocontroller.buscarProduto);

//alterar produto
router.put("/controle/alterar/produto/:id", gerenciamentocontroller.alterarProduto);

//deletar produto
router.delete("/controle/produto/deletar/:id", gerenciamentocontroller.deletarProduto);

export { router };