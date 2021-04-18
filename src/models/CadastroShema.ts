import { Schema } from"mongoose";


const cadastroShema = new Schema({
    nome: {
        type: String,
        required: [true, "O Campo NOME é obrigatório!"]
    },

    unidadeMedida: String, //Não é obrigatório!

},
    {
        timestamps: true,
    }
);

export { cadastroShema };