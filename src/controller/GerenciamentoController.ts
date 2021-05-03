//Ação para cadastrar, listar, buscar, filtrar, remover....

import { Router, Request, Response } from "express";
import AdicionarProdutoSchema from "../models/AdicionarProdutoSchema";
import ProdutoSchema from "../models/ProdutoSchema";
import FornecedorSchema from "../models/FornecedorSchema";

//--------FUNÇÕES DE BUSCAR PRODUTO E FORNECEDOR-------------

async function buscarProduto(nomeProduto: string) {
  const produto = await ProdutoSchema.find({ nomeProduto });
  return produto;
}

async function buscarFornecedor(nomeFornecedor: string) {
  const fornecedor = await FornecedorSchema.find({ nomeFornecedor });
  return fornecedor;
}

class GerenciamentoController {
  
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
      const { nomeProduto, unidadeMed, quantidade } = request.body;
      if(unidadeMed != "CAIXA" && unidadeMed != "PACOTE" && unidadeMed != "UNIDADE"){
        response.json({msg: "Unidade de medida não é valida!!!"});
      }
      const produto = await ProdutoSchema.findByIdAndUpdate(id, {
        nomeProduto,
        unidadeMed,
        quantidade
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

  //-----------------ENTRADA PRODUTO----------------------
  //Validação: só da entrada no produto caso o produto eo fornecedor já esteja cadastrado
  async cadastrarEntrada(request: Request, response: Response) {
    const nomeProduto = request.body.nomeProduto;
    const produtoEncontrado = await buscarProduto(nomeProduto);

    const nomeFornecedor = request.body.nomeFornecedor;
    const fornecedorEncontrado = await buscarFornecedor(nomeFornecedor);
    if (produtoEncontrado.length && fornecedorEncontrado.length) {
      try {
        const novaEntrada = await AdicionarProdutoSchema.create(request.body);
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
    const estoque = await AdicionarProdutoSchema.find();
    reponse.status(200).json(estoque);
  }

  //------------------SAIDA DE PRODUTOS---------------------
  async deletarEstoque(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const produto = await AdicionarProdutoSchema.deleteOne({
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
    const  numProdutos = await AdicionarProdutoSchema.estimatedDocumentCount();
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
export { GerenciamentoController };
