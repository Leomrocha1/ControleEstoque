import { Schema } from"mongoose";
import { cadastroShema } from "./CadastroShema";
import { fornecedorShema} from "./FornecedorShema";

const entradaShema = new Schema ({
    descricao: String,

    quantidade: {
        type:Number,
        required: [true, "O campo QUANTIDADE é obrigatório!"]
    },

    valor: {
        type:Number,
        required: [true, "O campo VALOR é obrigatório!"],
        min:[1, "Valor minímo de R$1,00"]
    },

    lote: {
        type:String,
        required: [true, "O campo LÓTE é obrigatório!"]
    },

    dataFabricacao:Date,

    dataValidade: {
        type:Date,
        required: [true, "O campo VALIDADE é obrigatório!"]
    },

    cadastros: [cadastroShema],
    fornecedores: [fornecedorShema]
},
    {
        timestamps: true,
    }
);

export {entradaShema};