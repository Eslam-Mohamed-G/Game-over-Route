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
        var api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        var response = await api.json();
        displayDiv(response);
    } catch (error) {
        console.error(error);
    }
}

// var colShow = document.getElementById("gameData");
// function displayDiv(games){
//     console.log(games)
//     for(i=0; i < games.length; i++){
//         var rowGame = document.createElement("div");
//         rowGame.innerHTML = 
//         `
//             <div data-id=${games[i].id} class="card h-100 bg-transparent" role="button">
//                 <div class=" card-body">
//                     <figure class="position-relative">
//                         <img class="card-img-top object-fit-cover h-100"
//                             src=${games[i].thumbnail}>
//                     </figure>
//                     <figcaption>
//                         <div class="hstack justify-content-between">
//                             <h3 class="h6 small">${games[i].title}</h3>
//                             <span class="badge text-bg-primary p-2">Free</span>
//                         </div>
//                         <p class="card-text small text-center opacity-50">
//                             ${games[i].short_description}
//                         </p>
//                     </figcaption>
//                 </div>
//                 <footer class="card-footer small hstack justify-content-between">
//                     <span class="badge badge-color">${games[i].genre}</span>
//                     <span class="badge badge-color">${games[i].platform}</span>
//                 </footer>
//             </div>
//         `
//         colShow.appendChild(rowGame);
//     }
// }
