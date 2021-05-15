import { Router, Request, Response } from "express";
import { CadastroController } from "../controller/CadastroController";
import { FornecedorController } from "../controller/FornecedorControler";
import { EntradaController } from "../controller/EntradaController"


const router = Router( );
const entradacontroller = new EntradaController( );
const cadastrocontroller = new CadastroController( );
const fornecedorcontroller = new FornecedorController( );

// ------------PRODUTO-----------------

//cadastro de produto
router.post("/controle/cadastrar/produto", cadastrocontroller.cadastrarProduto);

//listar produtos cadastrados
router.get("/controle/listar/produto", cadastrocontroller.listarProduto);

//buscar cadastro produto pelo NOME
router.get("/controle/produto/buscar/:nomeProduto", cadastrocontroller.buscarProduto);

//deletar cadastro produto
router.delete("/controle/produto/deletar/:id", cadastrocontroller.deletarProduto);

//total de cadastros de produtos
router.get("/controle/total/cadastros", cadastrocontroller.cadastrosTotal);

//alterar cadastro produto
router.put("/controle/alterar/produto/:id", cadastrocontroller.alterarProduto);


//-------------FORNECEDOR-------------

//cadastro de fornecedor
router.post("/controle/cadastrar/fornecedor", fornecedorcontroller.cadastrarFornecedor);

//listar fornecedores cadastrados
router.get("/controle/listar/fornecedor", fornecedorcontroller.listarFornecedor);

//buscar fornecedor pelo NOME
router.get("/controle/fornecedor/:nomeFornecedor", fornecedorcontroller.buscarFornecedor);

//deletar fornecedor
router.delete("/controle/fornecedor/deletar/:id", fornecedorcontroller.deletarFornecedor);

//alterar fornecedor
router.put("/controle/alterar/fornecedor/:id", fornecedorcontroller.alterarFornecedor);


//-------------ENTRADA NO ESTOQUE---------------

//cadastro de entrada
router.post("/controle/cadastrar/entrada", entradacontroller.cadastrarEntrada);

//Listar Estoque
router.get("/controle/listar/entrada", entradacontroller.listarEntrada);

//Deletar produto do estoque
router.delete("/controle/deletar/estoque/:id", entradacontroller.deletarEstoque);

//total de produtos em estoque
router.get("/controler/total/estoque", entradacontroller.produtosTotal);

export { router };