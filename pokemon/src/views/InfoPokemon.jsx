import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"


function InfoPokemon() {
    const {flag,setFlag}=useContext(PokemonContext)
    useEffect(()=>{
        setFlag(0)
      }, [])
    const {valor} = useParams()
    console.log(valor)
    const [pokemon, setPokemon] = useState([])
    const {posts,setPosts} = useContext(PokemonContext)

    useEffect(() => {
        seleccionarPokemon()
    }, [])

    const seleccionarPokemon = async () => {
        try {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon/${valor}`
            const results = await fetch(apiUrl)
            const data = await results.json()
            setPokemon(data)
            console.log(data)
        } catch (error) {
            console.log("hay un error en la peticion de la api " + error)
        }
    }

    if (Object.keys(pokemon).length > 0) {
        return (
            <div>
                <h1>{pokemon.name}</h1>
                <div>
                    <div>
                        <p>Caracteristicas</p>
                        <ul>
                            <li>{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</li>
                            <li>{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</li>
                            <li>{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</li>
                            <li>{pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}</li>
                            <li>{pokemon.stats[4].stat.name}: {pokemon.stats[4].base_stat}</li>
                            <li>{pokemon.stats[5].stat.name}: {pokemon.stats[5].base_stat}</li>
                            <li>type: {pokemon.types[0].type.name}</li>
                        </ul>
                        <img src={pokemon.sprites.other.dream_world.front_default}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default InfoPokemon;
