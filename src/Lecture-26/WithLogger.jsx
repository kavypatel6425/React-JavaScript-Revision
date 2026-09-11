import React from 'react'
import Message from './Message'
import Welcome from './Welcome'

function WithLogger() {

    const LoggedWelcome = WithLogger(Welcome)
    const LoggedMessage = WithLogger(Message)
    return (
        <>
            <LoggedWelcome name="Kavy" />
            <LoggedMessage text="Hello World!" />
        </>
    )
}

export default WithLogger