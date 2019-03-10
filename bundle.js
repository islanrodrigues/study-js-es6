"use strict";

var user = {
  nome: "Islan",
  idade: 21,
  empresa: "Estudante",
  endereco: {
    cidade: "Guarulhos",
    estado: "SP"
  }
};
var nome = user.nome,
    idade = user.idade,
    _user$endereco = user.endereco,
    cidade = _user$endereco.cidade,
    estado = _user$endereco.estado;
console.log('Olá! Meu nome é ' + nome + ' e tenho ' + idade + ' anos.'); //Usando Template Literals

console.log("Ol\xE1! Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos."));
console.log("Ol\xE1! Me chamo ".concat(nome, ", tenho ").concat(idade, " anos e resido atualmente na cidade de ").concat(cidade, "-").concat(estado));
