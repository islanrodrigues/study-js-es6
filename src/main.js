class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.registerHandlers();
    } // closing construtor



    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    } //closing method


    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descripEl = document.createElement('p');
            descripEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));
            linkEl.setAttribute('href', repo.html_url);

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descripEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    } //closing method



    addRepository(event) {
        event.preventDefault();
        
        this.repositories.push({
            name: 'Islan Rodrigues',
            description: '< "A dev in construction 💻☕️ " /> Computer Science Student',
            avatar_url: 'https://avatars1.githubusercontent.com/u/8366406?s=460&v=4',
            html_url: 'https://github.com/islanrodrigues',
        });

        this.render();
    }// closing method

}//closing class


new App();