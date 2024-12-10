class UI {
    constructor(gameData) {
        this.container = document.getElementById("gameData");
        // this.gameContainer = document.getElementById("gameData");
        // this.detailsContainer = document.getElementById("details");
        // this.btnClose = document.getElementById("btnClose");
    }

    clearContainer() {
        this.container.innerHTML = "";
    }

    displayGames(games) {
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

            gameCard.addEventListener("click", async () => {
                const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
                        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                };
                let id = gameCard.getAttribute("data-id")
                var apiId = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
                // console.log(id)
                var responseId = await apiId.json();
                // console.log(responseId)
                this.replaceNoneBlock(responseId)
            })
        });
    }

    replaceNoneBlock(id) {
        var details = document.getElementById("details");
        // console.log(id)
        var gameData = document.getElementById("gameData");
        var btnClose = document.getElementById("btnClose");
        details.classList.replace("d-none", "d-block")
        gameData.classList.add("d-none");


        var showDetails = document.createElement("div");
        showDetails.classList.add("container")
        showDetails.innerHTML =
            `
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
    `
        details.appendChild(showDetails)

        btnClose.addEventListener("click", function () {
            details.classList.replace("d-block", "d-none")
            gameData.classList.remove("d-none");
            showDetails.innerHTML = "";
        })
    }
}
export default UI