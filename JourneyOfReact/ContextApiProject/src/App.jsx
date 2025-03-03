import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/Theme'

function App() {

  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheme = () => {   // as function defined in theme.js but implementation is here
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //we have dependencey to perform the task i.e 'useEffect'
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");  // remove all light and dark from html file(page)
    document.querySelector('html').classList.add(themeMode); // replace with toggel of theme mode..
  },[themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
