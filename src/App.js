import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Pokemon from './views/Pokemon';

import Barra from './components/Barra';
import DetallePokemon from './views/DetallePokemon';

function App()
{
    return (
        <div className="App">
            <BrowserRouter>
                <Barra></Barra>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/pokemon' element={<Pokemon></Pokemon>}></Route>
                    <Route path='/pokemon/:name' element={<DetallePokemon></DetallePokemon>}></Route>
                    <Route path='*' element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter> 
        </div>
    );
}

export default App;
