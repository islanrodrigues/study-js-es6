const user = {
    nome: "Islan",
    idade: 21,
    empresa: "Estudante",
    endereco: {
        cidade: "Guarulhos",
        estado: "SP"
    },
};

const {nome, idade, endereco:{cidade, estado}} = user;

console.log('Olá! Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');

//Usando Template Literals
console.log(`Olá! Meu nome é ${nome} e tenho ${idade} anos.`);
console.log(`Olá! Me chamo ${nome}, tenho ${idade} anos e resido atualmente na cidade de ${cidade}-${estado}`);