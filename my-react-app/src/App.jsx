import HeroCssModules from './components/HeroCssModules'
import HeroStyledComponent from './components/HeroStyledComponent'
import './App.css'

function App() {
  return (
    <div className="App">
      {true && <HeroCssModules />}
      {false && <HeroStyledComponent />}
    </div>
  )
}

export default App
