const express = require("express");
const path = require("path");
const os = require("os");

const apiRoutes = require("./src/routes/api");
const webRoutes = require("./src/routes/web");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRoutes);
app.use("/web", webRoutes);


app.get("/", (req, res) => {
  res.send(`
    <h2>Pokeneas</h2>
    <p><a href="/api">/api</a> → JSON con pokenea aleatorio</p>
    <p><a href="/web">/web</a> → Vista con imagen y frase</p>
    <p>Container: ${os.hostname()}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Container ID: ${os.hostname()}`);
});