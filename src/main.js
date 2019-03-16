class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();
        
        this.repositories.push({
            name: 'Islan Rodrigues',
            description: '< "A dev in construction 💻☕️ " /> Computer Science Student',
            avatar_url: 'https://avatars1.githubusercontent.com/u/8366406?s=460&v=4',
            html_url: 'https://github.com/islanrodrigues',
        });

        console.log(this.repositories);
    }
}

new App();