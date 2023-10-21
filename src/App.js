import './App.css'
import { Badges } from "./components/Badges"
import { Banner } from './components/Banner'

function App() {

  // const badgeColorsMap = badgeColors.map((color, index) => {
  //   return (
  //     <Badges
  //       key={index}
  //       color={color}
  //     />
  //   )
  // })

  return (
    <div className="App">
      <Badges />
      <Banner />
    </div>
  )
}

export default App
