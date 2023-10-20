import './App.css'
import { Badges } from "./components/Badges"

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
    </div>
  )
}

export default App
