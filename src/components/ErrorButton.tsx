import React, { useEffect, useState } from "react"

export const ErrorButton: React.FC<{ message: string }> = ({message}) => {
    const [hasError, setError] = useState(false)
    const exceptionHandler = () => setError(true)
    if (hasError) {
        throw new Error(message)
    }
    return (
        <div>
            <button onClick={exceptionHandler}>例外起きるくん</button>
        </div>
    )
}
