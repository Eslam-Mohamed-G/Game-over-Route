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
            gameCard.setAttribute("data-id", element.id);
            gameCard.setAttribute("role", "button");

            gameCard.innerHTML =
            `
                <div class="card h-100 bg-transparent">
                    <div class="card-body">
                        <figure class="position-relative">
                            <img class="card-img-top object-fit-cover h-100"
                                src=${element.thumbnail}>
                        </figure>
                        <figcaption>
                            <div class="hstack justify-content-between">
                                <h6>${element.title}</h6>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text text-center">
                                ${element.short_description}
                            </p>
                        </figcaption>
                    </div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge badge-color rounded-2">${element.genre}</span>
                        <span class="badge badge-color rounded-2">${element.platform}</span>
                    </footer>
                </div>
            `;

            this.container.appendChild(gameCard);
            gameCard.addEventListener("click", function(){
                console.log(element.id)
            })
        });
    }
}
export default UI