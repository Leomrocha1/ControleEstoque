import { Request, Response } from "express";
import FornecedorSchema from "../models/FornecedorSchema";

//--------FUNÇÕES DE BUSCAR PRODUTO E FORNECEDOR-------------
async function buscarFornecedor(nomeFornecedor: string) {
    const fornecedor = await FornecedorSchema.find({ nomeFornecedor });
    return fornecedor;
  }

class FornecedorController{

//--------------------CADASTRAR FORNECEDOR-----------------------------
async cadastrarFornecedor(request: Request, response: Response) {
    const nomeFornecedor = request.body.nomeFornecedor;
    const fornecedorEncontrado = await buscarFornecedor(nomeFornecedor);
    if (fornecedorEncontrado.length) {
      response.status(400).json({ message: "Fornecedor já existe!" });
    } else {
      try {
        const novoFornecedor = await FornecedorSchema.create(request.body);
        response.status(201).json({
          objeto: novoFornecedor,
          msg: "Fornecedor cadastrado com sucesso!",
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

  //-------------------LISTAR FORNECEDOR----------------------------------
  async listarFornecedor(request: Request, reponse: Response) {
    const fornecedor = await FornecedorSchema.find();
    reponse.status(200).json(fornecedor);
  }

  //--------------------BUSCAR FORNECEDOR----------------------------
  async buscarFornecedor(request: Request, response: Response) {
      const { nomeFornecedor } = request.params;
      const fornecedor = await buscarFornecedor(nomeFornecedor);
      response.status(200).json(fornecedor);    
  }

  //----------------------DELETAR FORNECEDOR-----------------------------
  async deletarFornecedor(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const fornecedor = await FornecedorSchema.deleteOne({
        nomeFornecedor: id
      });
      response.status(200).json({
        objeto: fornecedor,
        msg: "Fornecedor deletado com sucesso!",
        erro: false,
      });
    } catch (error) {
      response.status(400).json({
        objeto: error,
        msg: "Falha ao deletar Fornecedor",
        erro: true,
      });
    }
  }

  //-------------------ALTERAR FORNECEDOR--------------------------------
  async alterarFornecedor(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const {
        nomeFornecedor,
        cnpjFornecedor,
        telFornecedor,
        emailFornecedor,
      } = request.body;
      const fornecedor = await FornecedorSchema.findByIdAndUpdate(id, {
        nomeFornecedor,
        cnpjFornecedor,
        telFornecedor,
        emailFornecedor,
      });
      response.status(200).json({
        objeto: fornecedor,
        msg: "Fornecedor alterado com sucesso!",
        erro: false,
      });
    } catch (error) {
      response.status(400).json({
        objeto: error,
        msg: "Falha ao alterar Fornecedor!",
        erro: true,
      });
    }
  }

}
export {FornecedorController};