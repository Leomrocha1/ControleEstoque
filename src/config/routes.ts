import { Router, Request, Response } from "express";
import { GerenciamentoController } from "../controller/GerenciamentoController"


const router = Router( );
const gerenciamentocontroller = new GerenciamentoController( );

// ------------PRODUTO-----------------

//cadastro de produto
router.post("/controle/cadastrar/produto", gerenciamentocontroller.cadastrarProduto);

//listar produtos cadastrados
router.get("/controle/listar/produto", gerenciamentocontroller.listarProduto);

//buscar cadastro produto pelo NOME
router.get("/controle/produto/buscar/:nomeProduto", gerenciamentocontroller.buscarProduto);

//deletar cadastro produto
router.delete("/controle/produto/deletar/:id", gerenciamentocontroller.deletarProduto);

//total de cadastros de produtos
router.get("/controle/total/cadastros", gerenciamentocontroller.cadastrosTotal);

//alterar cadastro produto
router.put("/controle/alterar/produto/:id", gerenciamentocontroller.alterarProduto);


//-------------FORNECEDOR-------------

//cadastro de fornecedor
router.post("/controle/cadastrar/fornecedor", gerenciamentocontroller.cadastrarFornecedor);

//listar fornecedores cadastrados
router.get("/controle/listar/fornecedor", gerenciamentocontroller.listarFornecedor);

//buscar fornecedor pelo NOME
router.get("/controle/fornecedor/:nomeFornecedor", gerenciamentocontroller.buscarFornecedor);

//deletar fornecedor
router.delete("/controle/fornecedor/deletar/:id", gerenciamentocontroller.deletarFornecedor);

//alterar fornecedor
router.put("/controle/alterar/fornecedor/:id", gerenciamentocontroller.alterarFornecedor);


//-------------ENTRADA NO ESTOQUE---------------

//cadastro de entrada
router.post("/controle/cadastrar/entrada", gerenciamentocontroller.cadastrarEntrada);

//Listar Estoque
router.get("/controle/listar/entrada", gerenciamentocontroller.listarEntrada);

//Deletar produto do estoque
router.delete("/controle/deletar/estoque/:id", gerenciamentocontroller.deletarEstoque);

//total de produtos em estoque
router.get("/controler/total/estoque", gerenciamentocontroller.produtosTotal);

export { router };