import { model, Schema } from"mongoose";

const fornecedorSchema = new Schema({
    nomeFornecedor: {
        type: String,
        required: [true, "O campo NOME DO FORNECEDOR é obrigatório."]
    },

    cnpjFornecedor: {
        type: String,
        required:[true, "O campo CNPJ é obrigatório!"]
    },

    telFornecedor: {
        type: String,
        required:[true, "campo TELEFONE é obrigatório!"]
    },

    emailFornecedor: {
        type: String,
        required: [true, "O campo E-MAIL é obrigatório"]
    }
},
    {
        timestamps: true
    }
);

export default model("fornecedores", fornecedorSchema);
//export {fornecedorSchema};