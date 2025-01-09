import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from "axios";

export const dataContext = createContext();

function StoreAPI({ children }) {
    const [gameUI, setGameUI] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("mmorpg");

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: { category: category },
        headers: {
            'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        },
    };

    const fetchGames = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.request(options);
            setGameUI(response.data);
        } catch (error) {
            console.error("Error fetching games:", error);
        } finally {
            setLoading(false);
        }
    }, [category]);

    useEffect(() => {
        fetchGames();
    }, [fetchGames]);
    
// GamesDetails  GamesDetails   GamesDetails   GamesDetails 
    const [idGame, setIdGame] = useState(null);
    const [details, setDetails] = useState(null);

    const fetchDetails = useCallback(async () => {
        if (!idGame) return;
        setLoading(true);
        try {
            const response = await axios.request({
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
                params: { id: idGame },
                headers: {
                    'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                },
            });
            setDetails(response.data);
        } catch (error) {
            console.error("Error fetching game details:", error);
        } finally {
            setLoading(false);
        }
    }, [idGame]);

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);

    return (
        <div>
            <dataContext.Provider value={{gameUI, loading, category, setCategory, details, setIdGame}}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default StoreAPI
