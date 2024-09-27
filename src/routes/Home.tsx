import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DISCORD_ADD_BOT_URL } from "../env"

export default function Home() {
    const [isReady, setReady] = useState(true)
    const redirect = useNavigate()
    useEffect(()=>{
        setReady(true)
        setTimeout(()=>{setReady(false)}, 500)
    }, [])

    return <>
        <main className={"container grid grid-2" + ` ${ isReady ? "slideIn" : "" }`}>
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
                        So.. let's start
                    </h2>
                    <div className="d-flex gap-3 flex-center-items">
                        <button className="btn-primary" onClick={() => window.open(DISCORD_ADD_BOT_URL, "_blank")}>Add AbbyBot to my server</button>
                        <span className="text-light">or...</span>
                        <button className="btn-secondary" onClick={() => redirect("/dashboard")}>Go to dashboard </button>
                    </div>
                </div>
            </section>
            <section className="d-flex gap-4 flex-center flex-center-items flex-column p-4 mt-4">
                <img draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png" width={350} height={350} alt="" className="rounded" />
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