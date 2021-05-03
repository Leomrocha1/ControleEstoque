import { model, Schema } from"mongoose";

const saidaSchema = new Schema ({

    nomeProduto: {
        type : String,
        required: [true, "O campo NOME DO PRODUTO é obrigatório."]
    },

    quantidade: {
        type: Number,
        required : [true, "O campo QUANTIDADE é obrigatório."]
    }

},
    {
        timestamps : true
    }
);

export default model("saidas", saidaSchema);