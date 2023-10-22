import './App.css'
import { Badges } from "./components/Badges"
import { Banner } from './components/Banner'
import { Cards } from './components/Cards'
import { Testimonials } from './components/Testimonials'

function App() {

  return (
    <div className="app">
      <Badges />
      <Banner />
      <Cards />
      <Testimonials />
    </div>
  )
}

export default App
