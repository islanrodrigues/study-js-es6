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