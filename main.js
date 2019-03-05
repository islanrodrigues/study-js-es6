class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}

const MinhaList = new TodoList();

document.getElementById('new-todo').onclick = function() {
    MinhaList.addTodo();
};