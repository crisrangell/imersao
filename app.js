function pesquisar() {

let section = document.getElementById("resultado-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa");

console.log(campoPesquisa);

let resultados = "";

for(let dado of dados) {

    if(dado.titulo.includes(campoPesquisa))

resultados += `

 <div class="item-resultados" >
                <h2> Eu, a Patroa e as Crianças</h2>
                <p>Eu, a Patroa e as Crianças" é uma sitcom americana que mostra o dia a dia de uma família bem humorada e cheia de desafios. O pai, Michael Kyle, é um homem engraçado e cheio de ideias, mas nem sempre as melhores. Sua esposa, Janet, tenta manter a família unida e equilibrar a vida profissional com a doméstica. Os filhos, Michael Jr., Claire e Kady, cada um com sua personalidade, completam o quarteto e proporcionam muitas risadas com suas peripécias e conflitos familiares.</p>
                
                <aside class="container">
                    <img src="imagens/err-no.gif" alt="animacao eu a patroa e as criancas">
                </aside>

                <a href="https://pt.wikipedia.org/wiki/My_Wife_and_Kids" target="_blank">Para mais informações</a>
                
            </div>
            
            <div class="item-resultados">
                <h2>${dado.titulo} As visões da Raven</h2>
                <p>As Visões de Raven é uma série de TV sobre uma adolescente chamada Raven que tem o poder de ver o futuro. Apesar de divertido, esse poder às vezes a coloca em situações bem engraçadas e complicadas. Com a ajuda de seus amigos e família, Raven tenta usar suas visões para melhorar sua vida, mas nem sempre as coisas saem como planejado. </p>
                <aside class="container"> 
                    <img src="imagens/raven-thats-so-raven.gif" alt="gif de animacao">

                </aside>

                <a href="https://pt.wikipedia.org/wiki/That%27s_So_Raven" target="_blank">Para mais informações</a>
                    
                
            </div>

            <div class="item-resultados">
                <h2>Todo Mundo odeia o Chris</h2>
                <p>Todo Mundo Odeia o Chris é uma série de comédia que mostra a vida de um adolescente negro nos anos 80, em um bairro de Nova York. A série é baseada nas experiências de vida do comediante Chris Rock e acompanha as aventuras e desventuras de Chris e sua família enquanto ele tenta sobreviver à adolescência, à escola e aos desafios da vida cotidiana. </p>
                <aside class="container"> 

                    <img src="imagens/everyone-hates-chris-lil-uzi.gif" alt="animacao">

                </aside>

                <a href="https://pt.wikipedia.org/wiki/Everybody_Hates_Chris" target="_blank">Para mais informações</a>
            </div>

            <div class="item-resultados">
                <h2>Smallville</h2>
                <p>Smallville conta a história de Clark Kent, antes de se tornar o Super-Homem. A série acompanha sua juventude na pequena cidade de Smallville, Kansas, onde ele descobre seus poderes e tenta conciliar sua vida normal com suas habilidades sobre-humanas. A trama explora a origem dos poderes de Clark, seus relacionamentos com os amigos e a família, e como ele se transforma no herói que conhecemos.</p>
                <aside class="container"> 
                    <img src="imagens/smallville-super-speed.gif" alt="animacao">

                </aside>

                <a href="https://pt.wikipedia.org/wiki/Smallville_(teless%C3%A9rie)" target="_blank">Para mais informações</a>
            </div>

            <div class="item-resultados">
                <h2>Chaves</h2>
                <p>Chaves é um seriado mexicano de comédia que se passa em uma vecindade (vizinhança) mexicana. O personagem principal, Chaves, é um menino órfão e pobre que mora em um barril e faz amizade com os outros moradores do local. As histórias giram em torno das aventuras e travessuras de Chaves e seus amigos, como o Seu Madruga, o Seu Barriga, a Chiquinha e a Dona Florinda. A série é conhecida por seu humor físico, pelas situações cômicas e pelos personagens carismáticos que marcaram gerações.</p>
                <aside class="container"> 
                    <img src="imagens/seu-madruga-seu-madruga-trabalhando.gif" alt="animacao">

                </aside>

                <a href="https://pt.wikipedia.org/wiki/El_Chavo_del_Ocho" target="_blank">Para mais informações</a>
            </div>

            <div class="item-resultados">
                <h2>Um maluco do pedaço</h2>
                <p>Um Maluco no Pedaço conta a história de Will Smith, um adolescente que cresce em um bairro pobre de Filadélfia. Após se envolver em uma confusão, sua mãe o envia para morar com seus tios ricos em Bel-Air, um bairro elegante de Los Angeles. A série mostra o choque cultural e as aventuras de Will enquanto ele se adapta a uma nova vida, cheia de luxo e costumes diferentes dos quais ele está acostumado.</p>
                <aside class="container"> 
                    <img src="imagens/rambunctious-fresh-prince.gif" alt="animacao">

                </aside>

                <a href="https://pt.wikipedia.org/wiki/The_Fresh_Prince_of_Bel-Air" target="_blank">Para mais informações</a>
            </div>
        `;
    }   

    section.innerHTML = resultados;
}
