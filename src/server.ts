import express, {Request, Response} from "express";
import { mongoose } from "./config/database";
import { router } from "./config/routes";
//import { router } from " ";
//import { mongoose } from " ";

const app = express( );

const db = mongoose;

console.clear( );

app.use(express.json( ));

app.use(router);

app.listen(8000,( ) => {
    console.log("O servidor está rodando...");
})