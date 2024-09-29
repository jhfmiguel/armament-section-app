'use client'

import { createContext } from "react"

interface AppContextProps {
    name: string
}

export const AppContext = createContext({} as AppContextProps)

export default function AppContextProvider( { children }: { children: React.ReactNode }){

    return (

        <AppContext.Provider value={{
            name: 'Context API Test'
        }}>

            {children}

        </AppContext.Provider>

    )

}