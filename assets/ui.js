class UI{
    constructor(gameData) {
        this.container = document.getElementById("gameData");
    }

    clearContainer(){
        this.container.innerHTML = "";
    }

    displayGames(games){
        this.clearContainer();

        games.forEach(element => {
            var gameCard = document.createElement("div");
            gameCard.classList.add("cardId");
            gameCard.setAttribute("data-id", games[i].id);
            gameCard.setAttribute("role", "button");
        });
    }
}
export default UI