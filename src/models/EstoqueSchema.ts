import { model, Schema } from"mongoose";
import { entradaSchema } from "./EntradaSchema";
import {fornecedorSchema} from "./FornecedorSchema";

const estoqueSchema = new Schema ({
    entradaProdutos: [entradaSchema],
    
    fornecedores: [fornecedorSchema]
    
    },
    {
        timestamps: true,
    }
);

export default model("estoques", estoqueSchema);
