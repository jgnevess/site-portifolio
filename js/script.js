const text = "Desenvolvedor Backend";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}


async function gitRepo() {
    const ignorarRepos = ['collections-java-api-2023', 'ganhando_produtividade_com_Stream_API_Java', 'jgnevess'];


    fetch('https://api.github.com/users/jgnevess/repos')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('repos');

            data.filter(repo => !ignorarRepos.includes(repo.name))
            .forEach(repo => {
                const linha = document.createElement('a');
                linha.href = `${repo.html_url}`
                linha.target = '_blank'
                linha.innerText = `[✔] ${repo.name} - ${repo.language}`;
                container.appendChild(linha);
                container.appendChild(document.createElement('br'))
            });
        })
        .catch(error => {
            const container = document.getElementById('repos');
            const linha = document.createElement('div');
            linha.innerText = `Erro ao carregar projetos.txt`;
            container.appendChild(linha);
        });


}

gitRepo();

typeWriter();