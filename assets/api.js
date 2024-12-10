
class GamesAPI {

    constructor(){
        this.options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    }

    async fetchGames(category) {
        try {
            var response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, this.options);
            return await response.json();
        } catch (error) {
            console.error('Error fetching games:', error);
            return [];
        }
    }

    // async gameID() {
    //     let id = this.getAttribute("data-id")
    //     var apiId = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, this.options);
    //     // console.log(id)
    //     var responseId = await apiId.json();
    //     // console.log(responseId)
    //     // replaceNoneBlock(responseId)
    
    // }
}

export default GamesAPI;