import api from './api';


class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repo]');
        this.listEl = document.getElementById('repo-list');
        this.registerHandlers();
    } // closing construtor


    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.setAttribute('id', 'loading');
            loadingEl.appendChild(document.createTextNode('Carregando ...'));

            this.formEl.appendChild(loadingEl);
        
        } else {
            document.getElementById('loading').remove();
        }
    }

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
            descripEl.appendChild(document.createTextNode(repo.bio));

            let iconEl = document.createElement('i');
            iconEl.setAttribute('class', 'fab fa-github');

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar '));
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(iconEl);

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descripEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    } //closing method



    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;  
        
        try {
            this.setLoading();

            const response = await api.get(`/users/${repoInput}`);
        
            const {name, bio, avatar_url, html_url} = response.data;

            this.repositories.push({
                name,
                bio,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';

            this.render();
        
        } catch (err) {
            alert('O usuário informado não é válido!');
        }

        this.setLoading(false);
    }// closing method

}//closing class


new App();