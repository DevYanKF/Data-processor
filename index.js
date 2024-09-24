const readline = require("readline")
const fs = require ("fs")

const line = readline.createInterface({
    input: fs.createReadStream("dados-ficticios.csv"),
});

let firstLine = true;

line.on("line", (data) => {
    let csv = data.split(";")

    if (firstLine) {
        firstLine = false;
        return;
    }

    console.log(`Nome: ${csv[0]} - Telefone: ${csv[1]} - Email: ${csv[2]} - Valor em Conta: ${csv[3]}`);
});