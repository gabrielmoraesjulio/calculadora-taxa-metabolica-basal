const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));

const port = process.env.PORT || 4040;
app.listen(port, console.log(`Your app is running in http://localhost:${port}`));

app.get("/", (req, res) => {
    res.render("index")
})
app.post("/calcular", (req, res) => {

    let gender = req.body.gender
    let peso = req.body.peso;
    let altura = req.body.altura;
    let idade = req.body.idade;
    let fitness = req.body.fitness

    if (gender == 0) {
        let soma = 66.5 + 13.75 * peso + 5.003 * altura
        let resp = soma - 6.75 * idade
        let atividadeFisica = resp * fitness
        let tmb = atividadeFisica

        if (tmb !== NaN || undefined) {
            console.log(Math.round(tmb));
            res.render("index", {resultado: Math.round(tmb)});
        } else {
            res.render("index")
        }
    } else if (gender == 1) {
        let soma = 655.1 + 9.563 * peso + 1.850 * altura
        let resp = soma - 4.676 * idade
        let atividadeFisica = resp * fitness
        let tmb = atividadeFisica

        if (tmb !== NaN || undefined) {
            console.log(Math.round(tmb));
            res.render("index", {resultado: Math.round(tmb)});
        } else {
            res.render("index")
        }
    }
})