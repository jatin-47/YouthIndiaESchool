require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 5050);

app.get("/", (request, response) => {
    response.sendFile("public/index.html");
});
app.use("/rest/v1/calendar", require("./routes/calendar"));

app.use((request, response, next) => {
    response.status(404).send("Oops! The page you are looking for doesn't exist");
    next();
});

app.listen(app.get("port"), () => {
    console.log(`Server Running at http://localhost:${app.get("port")}/`);
});

process.on("unhandledRejection", (error, promise) => {
    console.log(`Logged Error: ${error}`);
});
