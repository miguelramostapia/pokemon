import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [opcion, setOpcion] = useState(-1);
    const [flag, setFlag]= useState(0);
    useEffect(() => {
        solicitaDatos()
    }, [])

    const solicitaDatos = async () => {
        try {
            const apiUrl = 'https://pokeapi.co/api/v2/pokemon'
            const results = await fetch(apiUrl);
            const  data  = await results.json();
            setPosts(data.results)
        } catch (error) {
            console.log(error)
        }}
    return (
        <PokemonContext.Provider value={{ posts, setPosts,opcion, setOpcion, flag, setFlag }} >
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;
