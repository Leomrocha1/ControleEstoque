import ProdutoSchema from "../models/ProdutoSchema";
import { Request, Response } from "express";

//--------FUNÇÕES DE BUSCAR PRODUTO -------------
async function buscarProduto(nomeProduto: string) {
  const produto = await ProdutoSchema.find({ nomeProduto });
  return produto;
} 

class CadastroController{
     //-------------------CADASTRAR PRODUTO----------------------------
  async cadastrarProduto(request: Request, response: Response) {
    const nomeProduto = request.body.nomeProduto;
    const produtoEncontrado = await buscarProduto(nomeProduto);
    if (produtoEncontrado.length) {
      response.status(400).json({ message: "Produto existente!" });
    } else {
      try {
        const novoProduto = await ProdutoSchema.create(request.body);
        response.status(201).json({
          objeto: novoProduto,
          msg: "Produto cadastrado com sucesso!",
          erro: false,
        });
      } catch (error) {
        response.status(400).json({
          objeto: error,
          msg: "Falha no cadastro",
          erro: true,
        });
      }
    }
  }

  //--------------------LISTAR CADASTRO PRODUTO-------------------------------------
  async listarProduto(request: Request, reponse: Response) {
    const produto = await ProdutoSchema.find();
    reponse.status(200).json(produto);
  }

  //-------------------BUSCAR CADASTRO PRODUTO--------------------------------------
  async buscarProduto(request: Request, response: Response) {
    const { nomeProduto } = request.params;
    const produto = await buscarProduto(nomeProduto);
    response.status(200).json(produto);
  }

  //-------------------DELETAR CADASTRO DE PRODUTO-----------------------------------
  async deletarProduto(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const produto = await ProdutoSchema.deleteOne({ nomeProduto: id });

      response
        .status(201)
        .json({
          objeto: produto,
          msg: "Cadastro deletado com sucesso!",
          erro: false,
        });
    } catch (error) {
      response.status(400).json({
        objeto: error,
        msg: "Falha ao deletar o Cadastro",
        erro: true,
      });
    }
  }

  //-----------------TOTAL DE CADASTRADOS----------------------------------------
  async cadastrosTotal(request: Request, response: Response) {
    const numCadastros = await ProdutoSchema.estimatedDocumentCount();
    response.json({ msg: "Total de cadastros:", Object: numCadastros });
  }

  //-------------------ALTERAR CADASTRO PRODUTO------------------------------------
  async alterarProduto(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { nomeProduto, unidadeMed } = request.body;
      if(unidadeMed != "CAIXA" && unidadeMed != "PACOTE" && unidadeMed != "UNIDADE"){
        response.json({msg: "Unidade de medida não é valida!!!"});
      }
      const produto = await ProdutoSchema.findByIdAndUpdate(id, {
        nomeProduto,
        unidadeMed
      });
      response
        .status(200)
        .json({
          objeto: produto,
          msg: "Produto alterado com sucesso!",
          erro: false,
        });
    } catch (error) {
      response.status(400).json({
        objeto: error,
        msg: "Falha ao alterar o Produto",
        erro: true,
      });
    }
  }

}
export { CadastroController };