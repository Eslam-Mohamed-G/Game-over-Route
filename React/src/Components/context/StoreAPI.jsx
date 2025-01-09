import React, { createContext, useCallback, useEffect, useState } from 'react';
import axios from "axios";

export const dataContext = createContext();

function StoreAPI({ children }) {
    const [gameUI, setGameUI] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState(()=>{
        const savedGames = sessionStorage.getItem('category');
        return savedGames ? savedGames : "mmorpg";
    });
    const headers = {
        'x-rapidapi-key': '6a1ac68fc8msh7784b7711a286d5p197782jsn8fa5fa9c631a',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    }

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: { category: category },
        headers: headers,
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
        if(category){
            sessionStorage.setItem('category', category)
        }
    }, [fetchGames, category]);
    
    // GamesDetails  GamesDetails   GamesDetails   GamesDetails 
    const [idGame, setIdGame] = useState(()=>{
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
            // console.log(response.data);
            setDetails(response.data);
        } catch (error) {
            console.error("Error fetching game details:", error);
        } finally {
            setLoading(false);
        }
    }, [idGame]);

    useEffect(() => {
        fetchDetails();
        if(idGame){
            sessionStorage.setItem('idGame', idGame)
        }
    }, [fetchDetails, idGame]);
    // GamesDetails  GamesDetails   GamesDetails   GamesDetails 

    const fetchAPI = async () => {
        try {
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
                headers: headers
            };
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error("fetchingAPI", error);
        }
    }
    useEffect(() => {
        fetchAPI()
    }, []);
    return (
        <div>
            <dataContext.Provider value={{gameUI, loading, category, setCategory, details, setIdGame}}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default StoreAPI
