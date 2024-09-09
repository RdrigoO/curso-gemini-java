function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    //se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhuma busca efetuada</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
    //se titulo includes campoPesquisa, então faça...
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.habilidade}</p>
                <a href=${dado.custo_de_mana} target="_blank">Clique para conhecer</a>

            </div>
        `;

        }
           
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }


    section.innerHTML = resultados
}
//console.log(dados);


// a barra dupla transforma a linha em um comentario, não impactando no código.
// o atalho CTRL+K em seguida CTRL+C comenta uma parte do codigo ja selecionada.
// o atalho CTRL+K em seguida CTRL+U retira o comentario da parte selecionada.


