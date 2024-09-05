function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
   
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultados = "";

    // Itera sobre cada elemento (dado) dentro da lista de dados.
    for (let dado of dados) {
        // Concatena o HTML para cada resultado, formatando os dados do objeto 'dado'.
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui o HTML gerado para o conteúdo interno da seção de resultados.
    section.innerHTML = resultados;
}