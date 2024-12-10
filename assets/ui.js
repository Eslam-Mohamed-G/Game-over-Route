class UI{
    constructor(gameData) {
        this.container = document.getElementById("gameData");
    }

    clearContainer(){
        this.container.innerHTML = "";
    }
}
export default UI