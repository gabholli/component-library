import './App.css'
import { Badges } from "./components/Badges"
import { Banner } from './components/Banner'
import { Cards } from './components/Cards'

function App() {

  return (
    <div className="app">
      <Badges />
      <Banner />
      <Cards />
    </div>
  )
}

export default App
