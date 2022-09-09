import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Exercice1 (){

  const navigate = useNavigate()

  return(
    <>
      <h1>CODE REACT TEST</h1>
      <h3>Exercise 1</h3>
      <h3>Fixing basic errors in the whole of the app</h3>
      <h4>In this exercice you should fix:</h4>
      <li> Navigate errors</li>
      <li> Routing names</li>
      <li> JS features implementations</li>
      <li> React features implementations</li>
      <li> Files namming</li>
      <br/>
      <button onClick={ () => navigate("2") }>Go to exercice 2</button>
    </>
  )

}