import App from "next/app"
import React from "react"

import { reportError, sentryInit } from "../externals/sentry"

type MyAppState = {
    eventId: string
    hasError: boolean
}

export default class MyApp extends App<Record<string, unknown>, Record<string, unknown>, MyAppState> {
    public state = {
        eventId: "",
        hasError: false
    }

    constructor(props) {
        super(props)
        if (typeof window !== "undefined") {
            sentryInit()
        }
    }

    public static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error) {
        const eventId = reportError(error)
        this.setState({ eventId })
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                {this.state.hasError ? <Error eventId={this.state.eventId} /> : <Component {...pageProps} />}
            </>
        )
    }
}

const Error: React.FC<{ eventId: string }> = ({ eventId }) => {
    return (
        <div>
            <p>エラー： {eventId}</p>
        </div>
    )
}

