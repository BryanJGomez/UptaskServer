import express from "express";
const app = express();

let port = 4000 || 5000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
