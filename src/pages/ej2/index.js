import React from 'react'

export default function Exercice2(){

const baseURL = "https://rickandmortyapi.com/api/"
const endpoints = {
    CHARACTER: "character"
  }

  const [ allCharacters, setAllCharacters ] = React.useState([])
  const [ loading, setLoading ] = React.useState(true)

  const getAllCharacters = async () => {
     setLoading(true)
     fetch(`${baseURL}/${endpoints.CHARACTER}`, {
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
   });


  //////////
   return (<>
   <h1>CODE REACT TEST</h1>
    <h3>Exercise 1</h3>
    <Link to="/1">Return to Exercice 1</Link>
    <br/>
    <br/>
    <h3>Consuming The Rick and Morty API is a REST(ish)</h3>
    <h4>In this exercice you should:</h4>
    <li> Consume and list the characters available from the API, <i>(name image and a short description)</i></li>
    <li> Display just 7 items at time and allow to move between "pages" in the same screen <i>(Minimum 3 pages)</i></li>
    <li> Allow to users to filter and found an specific character</li>
    <li> Navigate to a single character screen with a complete info</li>
    <br/>
    <p>Please, be sure of display user's feedback such as <b>Loading states, Error states, etc</b></p>
    </>
       /*{  Start your code here  }
       {
         allCharacters.forEach( item => {
           <div style={{backgroundColor: "#707070"}}>
             <p>{item.name}</p>
           </div>
         })
       }*/
   
   
   );

 }