
    function pesquisar(){
        let section = document.getElementById("resultado-pesquisa");

        let campoPesquisa = document.getElementById("campo-pesquisa").value

        if(!campoPesquisa){
            section.innerHTML = "<p>Nada foi encontrado. Digite um seriado Nostalgico </p>"
            return

        }

        campoPesquisa = campoPesquisa.toLowerCase()
    
        let resultados = "";
        let titulo ="";
        let descricao = "";
    
        for(let dado of dados ){
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
                resultados += `
        
            <div class="item-resultados">
                   <h2>${dado.titulo}</h2>
                   <p>${dado.descricao}</p>
                   <aside class="container">
                       <img src="${dado.imagem}" alt="">
                   </aside>
                   <a href="${dado.link}" target=_blank >Para Mais informações</a>
               </div>
             `;

            }
            

            
              
        }

    if(!resultados) {
        resultados = " <p> Nada foi encontrado <p/>"

    }
    
    section.innerHTML = resultados;

    }

   