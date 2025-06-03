// Importazione dei moduli
const { url, port } = require("./data/db");
const postRouters = require("./routers/posts");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const cors = require("cors");

// Configuaazione app js
const express = require("express");
const app = express();
const config = { origin: "http://localhost:3000" };

app.use(express.static("public"));

// Importazione del body-parser
app.use(express.json());

// Utilizzo delle routers con architetttura REST
app.use("/posts", postRouters);

// Middlewares
app.use(cors(config));
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Collegato alla porta ${url}:${port}`);
});
