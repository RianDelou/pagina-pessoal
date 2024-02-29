const miniListaLinks = document.querySelectorAll(".apresentacao__links__navegacao");
const checkBoxMusic = document.querySelector(".adicionais__switch");
const textoMusica = document.querySelector(".adicionais__texto-musica");
const buttonHome = document.getElementById("button-home");
const buttonSobreMim = document.getElementById("button-sobre-mim");
const allButtons = document.querySelectorAll(".cabecalho__nav__button");
const conteudoPrincipal = document.querySelector(".apresentacao__conteudo");
const audio = document.querySelector(".audio");
const music = new Audio("./Audios/By Your Side (melancholy ver.).mp3");
music.loop = true;

function tocaAudio(listaLinks) {
    for (let i = 0; i < listaLinks.length; i++) {
        listaLinks[i].addEventListener("click", () => {
            audio.volume = 0.3;
            audio.play();
        });
    }
}

function loopRemoveActive () {
    allButtons.forEach((conteudo) => {
        conteudo.classList.remove("active");
    });
}

buttonHome.addEventListener("click", () => {

    loopRemoveActive();

    conteudoPrincipal.innerHTML = `  <h1 class="apresentacao__conteudo__titulo"> Front-end e back-end de qualidade com um aprendiz! <strong
    class="titulo-destaque">(que tenta se esforçar :>)</strong></h1>
<p class="apresentacao__conteudo__texto">Olá! me chamo Rian Delou, estou aprendendo a desenvolver em HTML,
CSS, javascript, utilizar a biblioteca react e java. Gostaria de ajudar você a colocar em prática boas ideias! ^^</p>
<div class="apresentacao__links">
<h2 class="apresentacao__links__texto">Acesse minhas redes:</h2>
<a class="apresentacao__links__navegacao" href="https://github.com/RianDelou" target="blank"><img class = "apresentacao__links__link__imagens" src = "./Imagens/github.png">GitHub</a>
<a class="apresentacao__links__navegacao" href="https://www.instagram.com/rian_delouu/" target="blank"><img class = "apresentacao__links__link__imagens" src = "./Imagens/instagram.png">Instagram</a>
<a class="apresentacao__links__navegacao" href="https://www.twitch.tv/deloou" target="blank"><img class = "apresentacao__links__link__imagens" src = "./Imagens/twitch.png">Twitch</a>
<a class="apresentacao__links__navegacao" href="https://monkeytype.com/profile/delou" target="blank"><img class = "apresentacao__links__link__imagens" src = "./Imagens/monkeytype.png">Monkeytype</a>
</div>`;

    const miniListaLinksAtt = document.querySelectorAll(".apresentacao__links__navegacao");

    tocaAudio(miniListaLinksAtt); // tenho que chamar novamente depois que modifico ou atualizo as tags de nav

    buttonHome.classList.add("active");
});

buttonSobreMim.addEventListener("click", () => {

    loopRemoveActive();

    conteudoPrincipal.innerHTML = ` <h1 class="apresentacao__conteudo__titulo">Sobre Mim</h1>
    <p class = "apresentacao__conteudo__texto teste">Considero que sou um estudante que está disposto a florescer, é por esse motivo que estou a
        procura de desafios maiores para a minha vida acadêmica. Em razão disso, tenho
        convicção de que estou aberto para diversas oportunidades, para que eu
        apresente e desenvolva com mais detalhes as minhas competências de trabalho
        em equipe, autonomia e liderança.</p>
    <p class = "apresentacao__conteudo__texto"> Falando de outras coisas sobre mim também... Eu amo jogar! meus 3 jogos favoritos seriam: omori, hollow knight e outer wilds. Além disso, curto muito jogos de ritmo, como osu! ou arcaea. Falando sobre músicas, se eu escolhesse 3 gêneros eu escolheria: alternative, jpop e mpb. É isso! ehehe</p>`;

    buttonSobreMim.classList.add("active");
});

checkBoxMusic.addEventListener("change", () => {
    if (checkBoxMusic.checked) {
        music.play();
        textoMusica.style.color = `#B98EA7`;
    } else {
        music.pause();
        textoMusica.style.color = `#EFF6EE`;
    }
});

tocaAudio(miniListaLinks);