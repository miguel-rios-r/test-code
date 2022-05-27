import React from "react"
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import 'bulma/css/bulma.min.css'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>}>
      </Route>
    </Routes>
  </BrowserRouter>
}

ReactDOM.render(
    <App/>,
  document.getElementById('app')
);