import { Schema } from"mongoose";


const produtoSchema = new Schema({
    nome: {
        type: String,
        required: [true, "O Campo NOME é obrigatório!"]
    },
    quantidade: {
        type: Number,
        required: [true, "O campo QUANTIDADE é obrigatório"],
        min:[1, "Adicionar no minimo 1 produto"]
    }, 
    unidadeMedida: String  //Não é obrigatório!

},
    {
        timestamps: true,
    }
);

export { produtoSchema };