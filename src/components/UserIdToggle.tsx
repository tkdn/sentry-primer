import React from "react"

export const UserIdToggle: React.FC = () => {
    const setHandler = () => {
        localStorage.setItem("userId", "1234")
    }
    const unsetHandler = () => {
        localStorage.removeItem("userId")
    }
    return (
        <ul>
            <li>userId : <button onClick={setHandler}>set</button></li>
            <li>userId : <button onClick={unsetHandler}>unset</button></li>
        </ul>
    )
}
