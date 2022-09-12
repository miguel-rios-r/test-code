import React from "react"
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Exercice1 from "./pages/exercise_1";
import Exercice2 from "./pages/exercise_2";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <h1>CODE REACT TEST</h1>
            <h4>The following test is about to prove basic acknowledgement in ReactJS</h4>
            <h3>Please:</h3>
            <li>Don't install any extra library without the current in package.json</li>
            <li>Be sure to read the package.json details</li>
            <li>Be sure of using the current features from JS</li>
            <li>Feel free to create any numbers of file as you need</li>
            <li>Be sure of using Declarative programming paradigm in all the ways as you can</li>
            <li>Not requiered but is a plus if you creates a custom hook instead to use the current into the screens</li>
            <li><b>DO NOT </b> push your changes to <b>MASTER</b>, instead start a new branch and creates a pull request</li>
            <br/>
            <Link to={"1"}>START</Link>
          </>
        }
      />
      <Route
        path="/1" 
        element={
          <Exercice1/>
        }
      />
      <Route
        path="/2" 
        element={
          <Exercice2/>
        }
      />
      <Route
        path="*"
        element={
          <>
            <h1>Not found</h1>
          </>
        }
      />
    </Routes>
  </BrowserRouter>
}

ReactDOM.render(
    <App/>,
  document.getElementById('app')
);
