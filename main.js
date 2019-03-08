const user = {
    nome: "Islan",
    idade: 21,
    endereco: {
        cidade: "Guarulhos",
        estado: "SP"
    },
};

console.log(user.nome);
console.log(user.idade);
console.log(user.endereco.cidade);

const {nome, idade, endereco: {cidade}} = user;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraInfo({nome, idade, endereco: {cidade, estado}}) {
    console.log(nome);
    console.log(idade);
    console.log(cidade, estado);
    
}

mostraInfo(user);