"use strict";

var user = {
  nome: "Islan",
  idade: 21,
  endereco: {
    cidade: "Guarulhos",
    estado: "SP"
  }
};
console.log(user.nome);
console.log(user.idade);
console.log(user.endereco.cidade);
var nome = user.nome,
    idade = user.idade,
    cidade = user.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      _ref$endereco = _ref.endereco,
      cidade = _ref$endereco.cidade,
      estado = _ref$endereco.estado;
  console.log(nome);
  console.log(idade);
  console.log(cidade, estado);
}

mostraInfo(user);
