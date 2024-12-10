document.addEventListener("DOMContentLoaded", function () {
    // استدعاء البيانات عند فتح الصفحة لأول مرة
    getGames("mmorpg"); // يمكنك تغيير الفئة الافتراضية حسب الحاجة
});
const toggler = document.querySelector(".navbar-toggler");
const menu = document.querySelector("#navbarSupportedContent");

toggler.addEventListener("click", function () {
    menu.classList.toggle("open");
});



var navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", function(){
        navLinks.forEach(activeLink => {
            activeLink.classList.remove("active");
        });
        link.classList.add("active");
        var category = link.getAttribute("data-category");
        console.log(category);
        getGames(category)
    })
})


async function getGames(category) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        var apiCategory = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        var response = await apiCategory.json();
        displayDiv(response);
    } catch (error) {
        console.error(error);
    }
}

var colShow = document.getElementById("gameData");

function displayDiv(games){
    console.log(games[1].id);
    colShow.innerHTML = "";
    for(i=0; i < games.length; i++){
        var rowGame = document.createElement("div");
        rowGame.classList.add("cardId")
        rowGame.setAttribute("data-id", games[i].id);
        rowGame.setAttribute("role", "button");
        rowGame.innerHTML = 
        `
            <div class="card h-100 bg-transparent">
                <div class="card-body">
                    <figure class="position-relative">
                        <img class="card-img-top object-fit-cover h-100"
                            src=${games[i].thumbnail}>
                    </figure>
                    <figcaption>
                        <div class="hstack justify-content-between">
                            <h6>${games[i].title}</h6>
                            <span class="badge text-bg-primary p-2">Free</span>
                        </div>
                        <p class="card-text text-center">
                            ${games[i].short_description}
                        </p>
                    </figcaption>
                </div>
                <footer class="card-footer small hstack justify-content-between">
                    <span class="badge badge-color rounded-2">${games[i].genre}</span>
                    <span class="badge badge-color rounded-2">${games[i].platform}</span>
                </footer>
            </div>
        `;
        colShow.appendChild(rowGame);
        rowGame.addEventListener("click", gameID)
    }
}

async function gameID() {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let id = this.getAttribute("data-id")
    var apiId = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    // console.log(id)
    var responseId = await apiId.json();
    // console.log(responseId)
    replaceNoneBlock(responseId)

}

var details = document.getElementById("details");
function replaceNoneBlock(id) {
    console.log(id)
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

    btnClose.addEventListener("click", function(){
        details.classList.replace("d-block", "d-none")
        gameData.classList.remove("d-none");
        showDetails.innerHTML = "";
    })
}