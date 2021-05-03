import mongoose  from "mongoose";

mongoose.connect(
    "mongodb+srv://leomr:leomr123@cluster0.dy2es.mongodb.net/ControleEstoque?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Aplicação conectado ao banco de dados!");
    })
    .catch((error) => {
        console.log(`Erro ao conectar com o banco: ${error}`);
      });

      export { mongoose };
