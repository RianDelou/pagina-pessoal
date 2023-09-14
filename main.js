function som () {
    var audio = document.querySelector(".audio");
    audio.volume = 0.3;
    audio.play();
}

const miniListaLinks = document.querySelectorAll(".apresentacao__links__link");

for(var i = 0; i < miniListaLinks.length; i++) {
    miniListaLinks[i].onclick = som;
}