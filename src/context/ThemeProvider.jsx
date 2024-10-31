import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    setTheme: (theme) => {}
})

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('abby-theme')

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])       

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }