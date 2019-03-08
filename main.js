const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => {
    return 'teste';
}
console.log(teste());


const teste2 = () => 'teste 02';
console.log(teste2());


const teste3 = () => ({Nome: 'Islan'});
console.log(teste3());


const filter = arr.filter(item => item%2 === 0);
console.log(filter);
