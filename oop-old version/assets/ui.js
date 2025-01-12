class UI {
    constructor() {
        this.gameContainer = document.getElementById("gameData");
        this.detailsContainer = document.getElementById("details");
    }

    clearContainer() {
        this.gameContainer.innerHTML = "";
    }

    displayGames(games, onGameClick) {
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

            this.gameContainer.appendChild(gameCard);

            gameCard.addEventListener("click", () => onGameClick(element.id))
        });
    }

    displayGameDetails(id) {
        this.detailsContainer.classList.replace("d-none", "d-block");
        this.gameContainer.classList.add("d-none");


        var showDetails = document.createElement("div");
        showDetails.classList.add("container")
        showDetails.innerHTML =
        `
            <div class="hstack justify-content-between">
                <h1 class="text-center h3 py-4">Details Game</h1>
                <button class="btn-close btn-close-white" id="btnClose"></button>
            </div>

            <div class="row g-4" id="detailsContent">
                <div class="col-md-4">
                    <img src=${id.thumbnail} class="w-100" alt="image details">
                </div>

                <div class="col-md-8">
                    <h3>Title: ${id.title}</h3>
                    <p>Category: <span class="badge text-bg-info">${id.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info">${id.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info">${id.status}</span> </p>
                    <p class="small">${id.description}</p>
                    <a class="btn btn-outline-warning" target="_blank"
                        href=${id.game_url}>Show Game</a>
                </div>
            </div>
        `;
        this.detailsContainer.innerHTML = "";
        this.detailsContainer.appendChild(showDetails);
        this.btnClose = showDetails.querySelector("#btnClose");
        this.btnClose.addEventListener("click", () => this.closeDetails());
    }

    closeDetails() {
        this.detailsContainer.classList.replace("d-block", "d-none");
        this.gameContainer.classList.remove("d-none");
        this.detailsContainer.innerHTML = "";
    }
}
export default UI