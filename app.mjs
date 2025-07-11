import Express from "express";
import connection from "./models/db.js";

const port = process.env.PORT || 8080;
const app = Express();

// Middleware para analisar JSON and URL-encoded request bodies
app.use(Express.json());
app.use(
	Express.urlencoded({
		extended: true,
	})
);

//sql error check (serviço deve estar rodando)
connection.connect((err) => {
	err
		? console.error("Connection error:", err)
		: console.log("Connection success!");
});

app.use(Express.static("public"));
app.use("/", (req, res) => {
	res.render("home");
});
app.set("view engine", "handlebars");
app.set("views", "./views");

app.listen(port, () => {
	console.log(`Server initialized in localhost:${port}`);
});
