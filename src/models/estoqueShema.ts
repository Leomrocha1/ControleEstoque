import { model, Schema } from"mongoose";
import { entradaShema } from "./EntradaShema";

const estoqueShema = new Schema ({

});

export default model("estoque", estoqueShema);