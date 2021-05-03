//Ação para cadastrar, listar, buscar, filtrar, remover....

import {  Router, Request, Response} from "express";
import ProdutoSchema from "../models/ProdutoSchema";



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

//-------------------BUSCAR PRODUTO--------------------------------------
    async buscarProduto(request: Request, response: Response){
        const { nomeProduto } = request.params;
        const produto = await buscarProduto(nomeProduto);
        response.status(200).json(produto);
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


 }
export {GerenciamentoController};
