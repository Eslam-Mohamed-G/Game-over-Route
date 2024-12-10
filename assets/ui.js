class UI{
    constructor(gameData) {
        this.container = document.getElementById("gameData");
    }

    clearContainer(){
        this.container.innerHTML = "";
    }

    displayGames(games){
        this.clearContainer();
    }
}
export default UI