import { Schema } from"mongoose";

const fornecedorShema = new Schema({
    nomeFornecedor: {
        type: String,
        required: [true, "O campo NOME DO FORNECEDOR é obrigatório."]
    },

    cnpj: {
        type:String,
        required:[true, "O campo CNPJ é obrigatório!"]
    },

    telefone: {
        type:String,
        required:[true, "campo TELEFONE é obrigatório!"]
    },

    endereco: {
        type:String,
        required: [true, "O campo ENDEREÇO é obrigatório"]
    },

    email: {
        required: [true, "O campo E-MAIL é obrigatório"]
    },
},
    {
        timestamps: true,
    }

);

export { fornecedorShema };