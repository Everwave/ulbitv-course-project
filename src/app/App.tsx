import { Link } from "react-router-dom"
import "./styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme"
import { classNames } from "shared/lib/classNames/classNames"
import AppRouter from "./router/ui/AppRouter"
import { Navbar } from "widgets/Navbar"

const App = () => {
 const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme, 'ads'])} >
      <Navbar/>
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter/>
      
    </div>
  )
}

export default App