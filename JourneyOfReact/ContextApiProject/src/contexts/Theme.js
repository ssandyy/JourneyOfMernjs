import { createContext, useContext } from "react";

export const ThemeContext = createContext({    // can give default value 
        themeMode: "light",
        darkTheme: () => {},
        lightTheme:()=>{}
})  


export const ThemeProvider = ThemeContext.Provider


//Custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}