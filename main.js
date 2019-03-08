class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        //console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Islan Rodrigues';
    }

    mostraUsuario() {
        //console.log(this.usuario);
    }
}

var MinhaList = new TodoList();

document.getElementById('new-todo').onclick = function() {
    MinhaList.add('Novo TODO');
};

MinhaList.mostraUsuario();


class Matematica {
    static soma(a, b) {
        return a + b;
    }

    static multiplicacao(a, b) {
        return a * b;
    }
}

//console.log('static method "soma": ' + Matematica.soma(4, 6));
//console.log('static method "multiplicacao": ' + Matematica.multiplicacao(2, 2));

const arr = [8, 27, 28, 6, 19];

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item % 2 === 1;
});

console.log(find);