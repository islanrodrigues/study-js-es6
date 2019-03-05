class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Islan Rodrigues';
    }

    mostraUsuario() {
        console.log(this.usuario);
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

console.log('static method "soma": ' + Matematica.soma(4, 6));
console.log('static method "multiplicacao": ' + Matematica.multiplicacao(2, 2));