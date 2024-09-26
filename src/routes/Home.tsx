import { useEffect, useState } from "react"

export default function Home() {
    const [isReady, setReady] = useState(true)

    useEffect(()=>{
        setReady(true)
        setTimeout(()=>{setReady(false)}, 500)
    }, [])

    return <>
        <main className={"container content grid grid-2" + ` ${ isReady ? "slideIn" : "" }`}>
            <section>
                <div className="p-4">
                    <h1 className="text-light">
                        Set AbbyBot, your server companion.
                    </h1>
                    <p className="text-light">
                        AbbyBot is a multifunctional tool for administration and entertainment
                        purposes for Discord servers.
                        If you're here, I'm sure you already know this.
                        In this panel you can configure it your way, either by changing its language, activating or deactivating events, among other functions.
                    </p>
                </div>
                <div className="p-4">
                    <h2 className="text-light">
                        So.. let's start with an option
                    </h2>
                    <div className="d-flex gap-3">
                        <button className="btn-primary">Add AbbyBot to my server</button>
                        <button className="btn-secondary">Manage servers</button>
                    </div>
                </div>
            </section>
            <section className="d-flex gap-4 flex-center flex-center-items flex-column p-4">
                <img draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png" width={400} height={400} alt="" className="rounded" />
                <div className="text-light text-center">
                    <p>
                        <strong>Abbybot's servers count:</strong> <i className="text-tertiary">0</i>
                    </p>
                    <p>
                        <strong>Bot Status:</strong> <i className="text-tertiary">Offline</i>
                    </p>
                </div>
            </section>
        </main>
    </>
}