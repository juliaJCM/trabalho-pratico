const filmesDados = {

}

var codFilme = () => {
    let input = document.getElementById('pesquisa');

    const pesquisa = input.value;
    const listaUser = localStorage.setItem('bd', pesquisa);


    window.location.assign("pesquisa.html");

}

const mostraFilmes = (data) => {
    let dadosHTML = ' ';
    let filmesDados = JSON.parse(data.target.response)
    for (let i = 0; i < filmesDados.results.length; i++) {
        let filme = filmesDados.results[i];
        dadosHTML += `
            <div class="card col-3" id="filmes">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${filme.title}</h5>
                        <a href="info.html" class="btn btn-dark">Detalhes</a>
                    </div>
            </div>`

    }
    document.getElementById('ListaFilmes').innerHTML = dadosHTML;
}

const mostrarErro = (data) => {
    alert("Erro na requisição");
}
const init = () => {
    let pesquisa = localStorage.getItem('bd');
    let xhr = new XMLHttpRequest();
    let url = "https://api.themoviedb.org/3/search/movie?api_key=b032bb4a661d6ed9865632176fd66fd9&lang&language=pt-BR&query=" + pesquisa;

    xhr.onload = mostraFilmes;
    xhr.onerror = mostrarErro;
    xhr.open('GET', url, true);
    xhr.send();

}

document.onload = init();