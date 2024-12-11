import GamesAPI from './assets/api.js';
import UI from './assets/ui.js';

document.addEventListener("DOMContentLoaded", () => {
    var api = new GamesAPI();
    var ui = new UI("gameData");
    var navLinks = document.querySelectorAll(".nav-link");
    var toggler = document.querySelector(".navbar-toggler");
    var menu = document.querySelector("#navbarSupportedContent");

    api.fetchGames("mmorpg").then(games => ui.displayGames(games, handleGameClick))

    toggler.addEventListener("click", ()=>{
        menu.classList.toggle("open")
    });


    navLinks.forEach((link)=>{
        link.addEventListener("click", () => {
            navLinks.forEach( activeLink => { activeLink.classList.remove("active")});
            link.classList.add("active");

            var category = link.getAttribute("data-category");
            api.fetchGames(category).then( games => {
                ui.displayGames(games, handleGameClick);
            })
        })
    });
    // Handle game click
    function handleGameClick(gameId) {
        api.fetchGameDetails(gameId).then(game => ui.displayGameDetails(game));
    }
})