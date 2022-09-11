import React, {useEffect, useState} from 'react' 
import { useNavigate } from 'react-router-dom'
import Characters from './components/Characters';
//import Characters from "./components/Characters";
export default function Exercice2 (){

  const navigate = useNavigate()
  const [allCharacters, setAllCharacters]=useState([]);

  const baseURL = "https://rickandmortyapi.com/api/"
  const endpoints = {
      CHARACTER: "character"
    }
  const url=`${baseURL}${endpoints.CHARACTER}`;
    
    const getAllCharacters= (url) => {
      fetch(url)
      .then(response =>response.json())
      .then(data=>setAllCharacters(data.results))
      .catch(error=>console.log(error))
    };

    useEffect(()=>{
      getAllCharacters(url);
    },[]);

  //const [ allCharacters, setAllCharacters ] = React.useState([])
  //const [ loading, setLoading ] = React.useState(true)

  /*const getAllCharacters = async () => {
    setLoading(true)
    fetch(`${baseURL}${endpoints.CHARACTER}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then( res => res.json())
      .then( decoded =>  setAllCharacters(decoded.results))
      .finally( () => setLoading(false) )
  
     };

   useEffect(async () => {
     await getAllCharacters();
  });*/

  return(
    <>
    
      <div className="container">
      <h1>matenme</h1>
        //revisar
        <Characters allCharacters={allCharacters}/>
      </div>
    </>
  )

}