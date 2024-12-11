
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
            var startTime = performance.now();
            var response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, this.options);
            var endTime = performance.now();
            var time = endTime - startTime;
            console.log(time);
            return await response.json();
        } catch (error) {
            console.error('Error fetching games:', error);
            return [];
        }
    }

    async fetchGameDetails(id){
        try {
            var startTime = performance.now();
            var responseId = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, this.options);
            var endTime = performance.now();
            var time = endTime - startTime;
            console.log(time);
            return await responseId.json();
        } catch (error) {
            console.error('Error fetching games details:', error);
            return [];
        }
    }
}

export default GamesAPI;