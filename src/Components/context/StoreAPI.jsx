import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from "axios";

export const dataContext = createContext();

function StoreAPI({ children }) {
    const [gameUI, setGameUI] = useState([]);
    const [loading, setLoading] = useState(false);

    const headers = {
        'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    }

    // all games in Home component   all games in Home component  all games in Home component  all games in Home component
    const [allGames, setAllGameUI] = useState([]);
    const fetchAllGaemsAPI = useCallback(async () => {
        setLoading(true);
        try {
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                headers: headers,
            };
            const response = await axios.request(options);
            setAllGameUI(response.data);
            // console.log(response.data);
            // const games = response.data
            // const platform = [...new Set(games.map(game => game.platform))];
            // console.log('platform:', platform);
        } catch (error) {
            console.error("all games error:-", error);
        } finally {
            setLoading(false);
        };
    }, [])
    useEffect(() => {
        fetchAllGaemsAPI()
    }, [fetchAllGaemsAPI]);

    // all games in Home component   all games in Home component  all games in Home component  all games in Home component

    // fetch games by category      fetch games by category      fetch games by category      fetch games by category      
    const [category, setCategory] = useState(() => {
        const savedGames = sessionStorage.getItem('category');
        return savedGames ? savedGames : "mmorpg";
    });
    const fetchGames = useCallback(async () => {
        setLoading(true);
        try {
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                params: { category: category },
                headers: headers,
            };
            const response = await axios.request(options);
            setGameUI(response.data);
            sessionStorage.setItem('gameUI', JSON.stringify({ category, data: response.data }));
        } catch (error) {
            console.error("Error fetching games Games Component:", error);
        } finally {
            setLoading(false);
        }
    }, [category]);

    useEffect(() => {
        const savedGameUI = JSON.parse(sessionStorage.getItem('gameUI'));
        if (savedGameUI && savedGameUI.category === category) {
            setGameUI(savedGameUI.data);
        } else {
            fetchGames();
        }
        if (category) {
            sessionStorage.setItem('category', category);
        }
    }, [fetchGames, category]);
    // fetch games by category      fetch games by category      fetch games by category      fetch games by category      

    // GamesDetails  GamesDetails   GamesDetails   GamesDetails 
    const [idGame, setIdGame] = useState(() => {
        const savedIdGame = sessionStorage.getItem('idGame');
        return savedIdGame ? savedIdGame : null;
    });
    const [details, setDetails] = useState(null);

    const fetchDetails = useCallback(async () => {
        if (!idGame) return;
        setLoading(true);
        try {
            const response = await axios.request({
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
                params: { id: idGame },
                headers: headers,
            });
            console.log(response.data);
            setDetails(response.data);
        } catch (error) {
            console.error("Error fetching game details:", error);
        } finally {
            setLoading(false);
        }
    }, [idGame]);

    useEffect(() => {
        fetchDetails();
        if (idGame) {
            sessionStorage.setItem('idGame', idGame)
        }
    }, [fetchDetails, idGame]);
    // GamesDetails  GamesDetails   GamesDetails   GamesDetails 

    // games by plateform   games by plateform  games by plateform  games by plateform
    const [platform, setPlatform] = useState(() => {
        const savedPlatform = sessionStorage.getItem('platform');
        return savedPlatform ? savedPlatform : null;
    });
    const fetchPlatform = useCallback(async () => {
        setLoading(true);
        try {
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                params: { platform: platform },
                headers: headers
            };
            const response = await axios.request(options);
            setGameUI(response.data);
        } catch (error) {
            console.error('platform error:-', error);
        } finally {
            setLoading(false);
        }
    }, [platform]);

    useEffect(() => {
        if (platform) {
            fetchPlatform();
        }
    }, [platform, fetchPlatform]);

    // games by plateform   games by plateform  games by plateform  games by plateform
    return (
        <div>
            <dataContext.Provider value={{ allGames, gameUI, loading, category, setCategory, details, setIdGame, setPlatform }}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default StoreAPI
