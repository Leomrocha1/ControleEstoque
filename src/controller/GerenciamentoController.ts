//Ação para cadastrar, listar, buscar, filtrar, remover....

import {  Router, Request, Response} from "express";
import EstoqueSchema from "../models/EstoqueSchema";
//import EntradaSchema from "../models/EntradaSchema"


class GerenciamentoController {

    async entradaProduto(request: Request, response: Response) {
       try{
           const novoProduto = await EstoqueSchema.create(request.body);
           response.status(201).json({
               objeto: novoProduto,
            msg: "Entrada de produto cadastrado com sucesso",
            erro: false
            });
       }catch(error){
           response.status(400).json({
               objeto: error,
               msg: "Falha na validação",
               erro: true
           });
       }
    }

    async listar(request: Request, reponse: Response){
        const estoque = await EstoqueSchema.find( );
        reponse.status(200).json(estoque);
    }

    async buscarPorId(request: Request, response: Response){
        const { id } = request.params;
        const estoque = await EstoqueSchema.find({ _id: id });
        response.status(200).json(estoque);
    }


}

export {GerenciamentoController};
