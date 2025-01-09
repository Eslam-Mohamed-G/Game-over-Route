import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/1_header/Navbar';
import Login from './Components/login/Login';
import Games from './Components/2_games/Games';
import Layout from './Components/layout/Layout';
import StoreAPI from './Components/context/StoreAPI';
import GamesDetails from './Components/3_gamesDetails/GamesDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const routes = createBrowserRouter([
  { path: '/', element: <Layout />,
    children: [
      { index: true, element: <Games category="mmorpg" /> },
      { path: 'pixel', element: <Games category="pixel" /> },
      { path: 'mmorpg', element: <Games category="mmorpg" /> },
      { path: 'shooter', element: <Games category="shooter" /> },
      { path: 'sailing', element: <Games category="sailing" /> },
      { path: 'superhero', element: <Games category="superhero" /> },
      { path: 'permadeath', element: <Games category="permadeath" /> },
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
