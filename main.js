const user = {
    nome: "Islan",
    idade: 21,
    empresa: "Estudante",
    endereco: {
        cidade: "Guarulhos",
        estado: "SP"
    },
};

// -- REST
const {nome, ...resto} = user;

console.log(nome);
console.log(resto);
 
const arr = [1, 2, 3, 4, 5];

const [a , b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 4, 5, 10));



// -- SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: "Islan",
    idade: 21,
    ocupacao: "desenvolvedor",
};

const usuario2 = {
    ...usuario1, nome: "José"
};

console.log(usuario2);
