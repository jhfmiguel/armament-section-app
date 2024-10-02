'use client'

import { createContext, useState } from "react"

type Theme = 'dark' | ''

interface AppContextProps {
    theme?: string
    changeTheme?: () => void
}

export const AppContext = createContext<AppContextProps>({})

export default function AppContextProvider( { children }: { children: React.ReactNode }){

    const [ theme, setTheme ] = useState<Theme>('')

    function changeTheme() {

        setTheme( theme === '' ? 'dark' : '' )

    }

    return (

        <AppContext.Provider value={{

            theme,
            changeTheme
            
        }}>

            {children}

        </AppContext.Provider>

    )

}