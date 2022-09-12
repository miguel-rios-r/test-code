import React, {useEffect, useState} from 'react' 
import { useNavigate } from 'react-router-dom'
import Characters from './components/Characters';
import Pagination from './components/Pagination';
export default function Exercice2 (){

  const navigate = useNavigate()
  const [allCharacters, setAllCharacters]=useState([]);
  const [info, setInfo]=useState([]);
  //
  //const [det, setDet]=useState([]);
  
  const baseURL = "https://rickandmortyapi.com/api/"
  const endpoints = {
      CHARACTER: "character"
    }
  const url=`${baseURL}${endpoints.CHARACTER}`;
    
    const getAllCharacters= (url) => {
      fetch(url)
      .then(response =>response.json())
      .then(data=>{
        setAllCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error=>console.log(error))
    };

    useEffect(()=>{
      getAllCharacters(url);
    },[]);

    const onPrevious=() =>{
      getAllCharacters(info.prev);
    }

    const onNext=() =>{
      getAllCharacters(info.next);
    }

    const onDetail=() =>{
      
    }

  return(
    <>
    <input placeholder="Search for characters" type="text"></input>
    <button onDetail={onDetail}>Buscar</button>
      <h1>Rick and Morty API</h1>
      <div className="container">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters allCharacters={allCharacters}/>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </>
  )
}