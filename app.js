// Importazione dei moduli
const { url, port } = require("./data/db");
const postRouters = require("./routers/posts");

// Configuaazione app js
const express = require("express");
const app = express();

app.use(express.static("public"));

// Importazione del body-parser
app.use(express.json());

// Utilizzo delle routers con architetttura REST
app.use("/posts", postRouters);

app.listen(port, () => {
  console.log(`Collegato alla porta ${url}:${port}`);
});
