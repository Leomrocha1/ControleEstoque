import { Schema } from "mongoose";
import { model } from "mongoose";

const EntradaSchema = new Schema(
  {
    nomeProduto: {
      type: String,
      required: [true, "O campo NOME PRODUTO é obrigatório"],
    },

    quantidade: {
      type: Number,
      required: [true, "O campo QUANTIDADE é obrigatório!"],
    },

    valor: {
      type: Number,
      required: [true, "O campo VALOR é obrigatório!"],
      min: [1, "Valor minímo de R$1,00"],
    },

    lote: {
      type: Number,
      required: [true, "O campo LOTE é obrigatório!"],
    },
 
  },
  {
    timestamps: true,
  }
);

export default model("estoque", EntradaSchema);
