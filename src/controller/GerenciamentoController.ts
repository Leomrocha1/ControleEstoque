//Ação para cadastrar, listar, buscar, filtrar, remover....

import {  Router, Request, Response} from "express";
import ProdutoSchema from "../models/ProdutoSchema";
import FornecedorSchema from "../models/FornecedorSchema";



//--------FUNÇÃO DE BUSCAR PRODUTO-------------

    async function buscarProduto(nomeProduto: string){
        const produto = await ProdutoSchema.find({nomeProduto});
        return produto;
   }



class GerenciamentoController {

//-------------------CADASTRAR PRODUTO----------------------------
    async cadastrarProduto(request: Request, response: Response){
        const nomeProduto = request.body.nomeProduto;
        const produtoEncontrado = await buscarProduto(nomeProduto)
        if(produtoEncontrado.length){
            response.status(400).json({message: "Produto existente!"});
        }else{
        try{
            const novoProduto = await ProdutoSchema.create(request.body);
            response.status(201).json({
                objeto: novoProduto,
                msg: "Produto cadastrado com sucesso!",
                erro: false
        });}catch(error){
            response.status(400).json({
                objeto: error,
                msg: "Falha no cadastro",
                erro: true
            });}}
        
    } 
    
    
//--------------------LISTAR PRODUTO-------------------------------------
async listarProduto(request: Request, reponse: Response){
    const produto = await ProdutoSchema.find( );
    reponse.status(200).json(produto);
}

//-------------------BUSCAR PRODUTO--------------------------------------
    async buscarProduto(request: Request, response: Response){
        const { nomeProduto } = request.params;
        const produto = await buscarProduto(nomeProduto);
        response.status(200).json(produto);
   }
   
//-----------------TOTAL PRODUTOS CADASTRADOS----------------------------------------
async produtosTotal(request: Request, response: Response){
    const  numProdutos = await ProdutoSchema.estimatedDocumentCount();
    if(numProdutos < 3){
       response.json({msg: "ATENÇÂO  menos de 3 produtos em estoque!!!" });
   }else{
       response.json({
           msg: "Total de produtos em estoque:",
           objeto:  numProdutos
       });
   }
}
   
//-------------------ALTERAR PRODUTO------------------------------------
   async alterarProduto(request: Request, response: Response){
    try{
     const {id} = request.params;
     const {nomeProduto, unidadeMed} = request.body;
     const produto = await ProdutoSchema.findByIdAndUpdate(id, {nomeProduto, unidadeMed});
     response.status(200).json(
         {objeto: produto,
          msg: "Produto alterado com sucesso!",
          erro: false
      });}catch(error){
         response.status(400).json({
             objeto: error,
             msg: "Falha ao alterar o Produto",
             erro: true
         });}}

//-------------------DELETAR PRODUTO-----------------------------------
async deletarProduto(request: Request, response: Response){
    
    try{
    const {id} = request.params;
    const produto = await ProdutoSchema.deleteOne({ nomeProduto: id});

    response.status(201).json(        
        {objeto: produto,
         msg: "Produto deletado com sucesso!",
         erro: false
     });}catch(error){
     response.status(400).json({
         objeto: error,
         msg: "Falha ao deletar o Produto",
         erro: true
     });}}
 }

//--------------------CADASTRAR FORNECEDOR-----------------------------
async cadastrarFornecedor(request: Request, response: Response){
    const nomeFornecedor = request.body.nomeFornecedor;
    const fornecedorEncontrado = await buscarFornecedor(nomeFornecedor)
    if(fornecedorEncontrado.length){
        response.status(400).json({message: "Fornecedor já existe!"});
    }else{
    try{
        const novoFornecedor = await FornecedorSchema.create(request.body);
        response.status(201).json({
            objeto: novoFornecedor,
            msg: "Fornecedor cadastrado com sucesso!",
            erro: false
    });}catch(error){
        response.status(400).json({
            objeto: error,
            msg: "Falha no cadastro",
            erro: true
        });}}

        //--------------------BUSCAR FORNECEDOR----------------------------
    async buscarFornecedor(request: Request, response: Response){
        const { nomeFornecedor } = request.params;
        const fornecedor = await buscarFornecedor(nomeFornecedor);
        response.status(200).json(fornecedor);
   }

   //-------------------ALTERAR FORNECEDOR--------------------------------
   async alterarFornecedor(request: Request, response: Response){
    try{
    const {id} = request.params;
    const {nomeFornecedor, cnpjFornecedor, telFornecedor, emailFornecedor} = request.body;
    const fornecedor = await FornecedorSchema.findByIdAndUpdate(id, {nomeFornecedor, cnpjFornecedor, telFornecedor, emailFornecedor});
    response.status(200).json({
        objeto: fornecedor,
        msg: "Fornecedor alterado com sucesso!",
        erro: false
});}catch(error){
    response.status(400).json({
    objeto: error,
    msg: "Falha ao alterar Fornecedor!",
    erro: true
});}}

}




 

export {GerenciamentoController};
