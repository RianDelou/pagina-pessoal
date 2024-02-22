const audio = document.querySelector(".audio");
const miniListaLinks = document.querySelectorAll(".apresentacao__links__navegacao");

for (let i = 0; i < miniListaLinks.length; i++) {
    miniListaLinks[i].addEventListener("click", () => {
        audio.volume = 0.3;
        audio.play();
    });
}