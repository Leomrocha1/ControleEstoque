import { model, Schema } from "mongoose";

const produtoSchema = new Schema(
  {
    nomeProduto: {
      type: String,
      required: [true, "O Campo NOME é obrigatório!"],
    },

    unidadeMed: {
      type: String,
      required: [true, "O campo UNIDADE DE MEDIDA é obrigatório!"],
      enum: ["UNIDADE", "CAIXA", "PACOTE"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("produtos", produtoSchema);
