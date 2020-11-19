import {init, Severity, configureScope, captureException} from "@sentry/browser"

const getUserId = () => {
    try {
        return localStorage.getItem("userId")
    } catch (error) {
        return null
    }
}

export const sentryInit = () => {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
        init({
            attachStacktrace: true,
            enabled: process.env.NODE_ENV === 'production',
            dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
            release: process.env.NEXT_PUBLIC_COMMIT_SHA,
            environment: process.env.NEXT_PUBLIC_APP_ENV,
            beforeSend: (event) => {
                if (event.exception.values[0].value.includes("Okuranai")) {
                    return null
                }
                return event
            }
        })
    }
}

export const reportError = (error: Error) =>  {
    const { message } = error
    configureScope(scope => {
        if (message.includes("Yabai")) {
            scope.setLevel(Severity.Critical)
        }
        scope.setTag("userId", getUserId())
    })
    return captureException(error);
}
