//Ação para cadastrar, listar, buscar, filtrar, remover....

import { Router, Request, Response} from "express";
//import  from "";

class GerenciamentoController {

    listar(request: Request, reponse: Response){
        const Produto ={
            nome : "Furadeira",
            marca : "Vonder",
            valor : "R$ 300,00"    
        };
        reponse.json(Produto);
    }

    buscarPorId(request: Request, response: Response) {}

    cadastrar(request: Request, response: Response) {
        const objeto = request.body;
        
    }

}

export {GerenciamentoController};
