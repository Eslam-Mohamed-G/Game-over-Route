import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Games from './Components/2_games/Games';
import Layout from './Components/layout/Layout';
import GamesDetails from './Components/3_gamesDetails/GamesDetails';
import Navbar from './Components/1_header/Navbar';
let routs = createBrowserRouter([
  {path:'', element : <Layout/>, children:[
    {index:true, element : <Navbar />},
    {path:'games', element: <Games/>},
    {path:'game/:id', element: <GamesDetails/>}
  ]}
])
function App() {
  return (
    <RouterProvider router={routs} />
  );
}

export default App
