import React from "react"
import { ErrorButton } from "../components/ErrorButton"
import { UserIdToggle } from "../components/UserIdToggle"

export default function Index() {
    return (
        <>
            <h1>Sentry Primer</h1>
            <main>
                <section>
                    <h2>例外を起こす</h2>
                    <h3>普通のメッセージ</h3>
                    <ErrorButton message="Normal Message" />
                    <h3>やばいメッセージ</h3>
                    <ErrorButton message="Yabai Message" />
                    <h3>送らないメッセージ</h3>
                    <ErrorButton message="Okuranai Message" />
                </section>
                <hr />
                <section>
                    <h2>UserId set/unset</h2>
                    <UserIdToggle />
                </section>
            </main>
        </>
    )
}
