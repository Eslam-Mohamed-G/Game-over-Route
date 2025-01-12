import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/1_header/Navbar';
import Login from './Components/login/Login';
import Games from './Components/3_games/Games';
import Layout from './Components/layout/Layout';
import StoreAPI from './Components/context/StoreAPI';
import GamesDetails from './Components/4_gamesDetails/GamesDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/2_home/Home';
import GamesGategory from './Components/gamesGategory/GamesGategory';
const routes = createBrowserRouter([
  { path: '/', element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: 'pc', element: <Games platform={'pc'}/> },
      { path: 'browser', element: <Games platform={'browser'}/> },
      { path: 'card', element: <GamesGategory category={'card'}/> },
      { path: 'pixel', element: <GamesGategory category={'pixel'}/> },
      { path: 'sports', element: <GamesGategory category={'sports'}/> },
      { path: 'mmorpg', element: <GamesGategory category={'mmorpg'}/> },
      { path: 'sci-fi', element: <GamesGategory category={'sci-fi'}/> },
      { path: 'shooter', element: <GamesGategory category={'shooter'}/> },
      { path: 'sailing', element: <GamesGategory category={'sailing'}/> },
      { path: 'strategy', element: <GamesGategory category={'strategy'}/> },
      { path: 'superhero', element: <GamesGategory category={'superhero'}/> },
      { path: 'permadeath', element: <GamesGategory category={'permadeath'}/> },
    ],
  },
  { path: '/:game/:id', element: <GamesDetails /> },
  { path: '/login', element: <Login /> },
]);
function App() {
  return (
    <StoreAPI>
      <RouterProvider router={routes} />
    </StoreAPI>
  );
}

export default App;
