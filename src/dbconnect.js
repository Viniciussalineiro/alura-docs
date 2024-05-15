import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://alura:123@cluster0.9jskxog.mongodb.net/"
  
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("projeto");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
