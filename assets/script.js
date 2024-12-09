
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
        var api = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', options)
        var response = await api.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
    
    // for(i=0; i<response.length; i++){
    //     console.log(response[i]);

    // }
}



// var colShow = document.getElementById("colShow");
//     arr.forEach(gaeDiv=>{
//         var colGame = document.createElement("div");
//         colGame.innerHTML = 
//         `
//             <div data-id=${gaeDiv.id} class="card h-100 bg-transparent" role="button">
//                 <div class=" card-body">
//                     <figure class="position-relative">
//                         <img class="card-img-top object-fit-cover h-100"
//                             src="https://www.freetogame.com/g/572/thumbnail.jpg">
//                     </figure>
//                     <figcaption>
//                         <div class="hstack justify-content-between">
//                             <h3 class="h6 small">Ravendawn</h3>
//                             <span class="badge text-bg-primary p-2">Free</span>
//                         </div>
//                         <p class="card-text small text-center opacity-50">
//                             A,2D,top-down,MMORPG,featuring,homesteading,and,building
//                         </p>
//                     </figcaption>
//                 </div>
//                 <footer class="card-footer small hstack justify-content-between">
//                     <span class="badge badge-color">MMORPG</span>
//                     <span class="badge badge-color">PC (Windows)</span>
//                 </footer>
//             </div>
//         `
//         colShow.appendChild(colGame);
//     })