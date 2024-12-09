async function getGames() {
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

getGames()