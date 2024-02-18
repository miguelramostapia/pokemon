import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonProvider from "./context/PokemonContext";


import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import InfoPokemon from "./views/InfoPokemon";

const App = () => {

  return (
    <div>
      <Navbar />
      <PokemonProvider>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Pokemon" element={<Pokemon />}/>
            <Route path="/Pokemon/:valor" element={<InfoPokemon />}/>
          </Routes>
      </PokemonProvider>
    </div>
  );
};
export default App;

