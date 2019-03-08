"use strict";

var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return 'teste';
};

console.log(teste());

var teste2 = function teste2() {
  return 'teste 02';
};

console.log(teste2());

var teste3 = function teste3() {
  return {
    Nome: 'Islan'
  };
};

console.log(teste3());
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
