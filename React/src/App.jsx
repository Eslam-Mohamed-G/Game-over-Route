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
const routes = createBrowserRouter([
  { path: '/', element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: 'pc', element: <Games/> },
      { path: 'card', element: <Games/> },
      { path: 'pixel', element: <Games/> },
      { path: 'sports', element: <Games/> },
      { path: 'mmorpg', element: <Games/> },
      { path: 'sci-fi', element: <Games/> },
      { path: 'shooter', element: <Games/> },
      { path: 'sailing', element: <Games/> },
      { path: 'browser', element: <Games/> },
      { path: 'strategy', element: <Games/> },
      { path: 'superhero', element: <Games/> },
      { path: 'permadeath', element: <Games/> },
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
