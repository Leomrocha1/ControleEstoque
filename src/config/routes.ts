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

//-------------FORNECEDOR------------

//cadastro de fornecedor
router.post("/controle/cadastrar/fornecedor", gerenciamentocontroller.cadastrarFornecedor);

//buscar fornecedor pelo NOME
router.get("/controle/fornecedor/:nomeFornecedor", gerenciamentocontroller.buscarFornecedor);

//alterar fornecedor
router.put("/controle/alterar/fornecedor/:id", gerenciamentocontroller.alterarFornecedor);

//deletar fornecedor
router.delete("/controle/fornecedor/deletar/:id", gerenciamentocontroller.deletarFornecedor);

//-------------ENTRADA NO ESTOQUE---------------

//cadastro de entrada
router.post("/controle/cadastrar/entrada", gerenciamentocontroller.cadastrarEntrada);

//Listar Estoque
router.get("/controle/listar/estoque", gerenciamentocontroller.listarEstoque);

export { router };