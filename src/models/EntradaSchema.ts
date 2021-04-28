import {  Schema } from "mongoose";
import { fornecedorSchema} from "./FornecedorSchema";

const entradaSchema = new Schema ({
    descricao: String,

    dataFabricacao:Date,

    categoria:{
        type: String,
        enum: ["ELETRONICOS", "FERRAMENTAS", "MOVEIS"],
        uppercase: true
    },
    valor: {
        type:Number,
        required: [true, "O campo VALOR é obrigatório!"],
        min:[1, "Valor minímo de R$1,00"]
    },

    lote: {
        type:Number,
        required: [true, "O campo LÓTE é obrigatório!"]
    },

    dataValidade: {
        type:Date,
        required: [true, "O campo VALIDADE é obrigatório!"]
    },

    
},
    {
        timestamps: true,
    }
);

export {entradaSchema};