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
            <Link to={"1"}>Start</Link>
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
