import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './pages/Home'
import CountryInfo from './pages/CountryInfo'

export const URL = 'http://localhost:4200';

function App() {

  return (
    <>
      <Router>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/country/:code" element={<CountryInfo />}></Route>
              </Routes>
      </Router>
    </>
  )
}

export default App
