import { useContext, useEffect } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { useNavigate } from "react-router-dom"

function Pokemon() {
  const {posts, setPosts, opcion, setOpcion,flag, setFlag}=useContext(PokemonContext)
  const navigate = useNavigate();
  useEffect(()=>{
    setOpcion(0)
  }, [])
  const handleSelectOnChange = (value) =>{
    const valor = (parseInt(value.target.value) + 1).toString()
    console.log("dentro del onchange")
    console.log(valor)
    setOpcion(valor)
  }
  function handlebuttonOnClick(){
    console.log("dentro del onclick");
    setFlag(flag+1);
    console.log(flag);

    const vista = () =>{
      if (opcion<0 && flag == 1) {
        alert("debe seleccionar una opcion")
      } else {
        console.log(flag)
        if(flag== 1 &&opcion >=0){
          console.log("paso por acá para cambiar dirección")
          console.log(`/Pokemon/${opcion}`)
          navigate(`/Pokemon/${opcion}`) 
        }
      }
    }
    vista();
  }
  useEffect(()=>{
    console.log("ejecutando useEffect y valor de Flag")
    setFlag(flag+1);
    console.log(flag);
  },[])
    return ( 
        <div>
            <h5>Seleccione un pokemon</h5>
            <select onChange={(element) => handleSelectOnChange(element)}>
                {posts.map((pokemon, index) =>
                    <option value={index} key={index}>{pokemon.name}</option>
                )}
            </select>
            <button onClick={ () => handlebuttonOnClick()} >View</button>
        </div>
    )
}
export default Pokemon;

 