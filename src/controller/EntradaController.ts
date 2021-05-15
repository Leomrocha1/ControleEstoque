//Ação para cadastrar, listar, buscar, filtrar, remover....

import { Router, Request, Response } from "express";
import EntradaSchema from "../models/EntradaSchema";
import ProdutoSchema from "../models/ProdutoSchema";
import {fornecedorSchema} from "../models/FornecedorSchema";

//--------FUNÇÕES DE BUSCAR PRODUTO e FORNECEDOR -------------
async function buscarProduto(nomeProduto: string) {
  const produto = await ProdutoSchema.find({ nomeProduto });
  return produto;
} 

/*async function buscarFornecedor(nomeFornecedor: string) {
  const fornecedor = await fornecedorSchema.find({ nomeFornecedor });
  return fornecedor;
}*/

class EntradaController {
  //-----------------ENTRADA PRODUTO----------------------
  //Validação: só da entrada no produto caso o produto eo fornecedor já esteja cadastrado
  async cadastrarEntrada(request: Request, response: Response) {
    const nomeProduto = request.body.nomeProduto;
    const produtoEncontrado = await buscarProduto(nomeProduto);

    //const nomeFornecedor = request.body.nomeFornecedor;
   // const fornecedorEncontrado = await buscarProduto(nomeFornecedor);
    if (produtoEncontrado.length) {
      try {
        const novaEntrada = await EntradaSchema.create(request.body);
        response.status(201).json({
          objeto: novaEntrada,
          msg: "Foi dada a entrada com sucesso!",
          erro: false,
        });
      } catch (error) {
        response.status(400).json({
          objeto: error,
          msg: "Falha na entrada",
          erro: true,
        });
      }
    } else {
      response
        .status(400)
        .json({
          message:
            "Certifique-se de que o PRODUTO e o FORNECEDOR estão cadastrados",
        });
    }
  }

  //----------------LISTAR PRODUTOS ESTOQUE------------------
  async listarEntrada(request: Request, reponse: Response) {
    const estoque = await EntradaSchema.find();
    reponse.status(200).json(estoque);
  }

  //------------------SAIDA DE PRODUTOS---------------------
  async deletarEstoque(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const produto = await EntradaSchema.deleteOne({
        nomeProduto: id,
      });

      response
        .status(201)
        .json({
          objeto: produto,
          msg: "Produto deletado com sucesso!",
          erro: false,
        });
    } catch (error) {
      response.status(400).json({
        objeto: error,
        msg: "Falha ao deletar o Produto",
        erro: true,
      });
    }
  }

  //-------------------TOTAL DE PRODUTOS NO ESTOQUE---------------------
  async produtosTotal(request: Request, response: Response){
    const  numProdutos = await EntradaSchema.estimatedDocumentCount();
    if(numProdutos < 3){
       response.json({msg: "ATENÇÂO  menos de 3 produtos em estoque!!!" });
   }else{
       response.json({
           msg: "Total de produtos em estoque:",
           objeto:  numProdutos
       });
   }
 }
}
export { EntradaController };
