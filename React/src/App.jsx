import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Games from './Components/2_games/Games';
import Layout from './Components/layout/Layout';
import GamesDetails from './Components/3_gamesDetails/GamesDetails';
import Navbar from './Components/1_header/Navbar';
import Login from './Components/login/Login';
const routes = createBrowserRouter([
  { path: '/', element: <Layout />,
    children: [
      { index: true, element: <Games category="mmorpg" /> },
      { path: 'mmorpg', element: <Games category="mmorpg" /> },
      { path: 'shooter', element: <Games category="shooter" /> },
      { path: 'sailing', element: <Games category="sailing" /> },
      { path: 'permadeath', element: <Games category="permadeath" /> },
      { path: 'superhero', element: <Games category="superhero" /> },
      { path: 'pixel', element: <Games category="pixel" /> },
    ],
  },
  { path: '/:game/:id', element: <GamesDetails /> },
  { path: '/login', element: <Login /> },
]);
function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App
