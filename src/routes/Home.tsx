export default function Home() {
    return <>
        <main className="container-md mt-4">
            <div style={{maxWidth: 563, marginBottom: "50px"}}>
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
            <div>
                <h4 className="text-light">
                    So.. let's start with an option
                </h4>
                <button className="btn-primary">Add AbbyBot to my server</button>
                <button className="btn-secondary">Manage servers</button>
            </div>
        </main>
    </>
}