import React, { createContext } from 'react'
import Home from './Home'

const UserContext = createContext()

function App_1() {
    // const user = "Kavy"

    return (
        <>
            <UserContext.Provider value={"Kavy"} >
                <Home />
            </UserContext.Provider>
        </>
    )
}

export default App_1