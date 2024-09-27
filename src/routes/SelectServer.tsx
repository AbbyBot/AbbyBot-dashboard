import { useNavigate } from "react-router-dom"
import { DISCORD_ADD_BOT_URL } from "../env";

export default function SelectServer() {
    const redirect = useNavigate();

    return (
        <main className="container text-light d-flex  text-center flex-center  flex-center-items flex-column slideIn" style={{ height: "calc(100vh - 80px)" }}>
            <section className="d-flex flex-column flex-center flex-grow-1">
                <h1>Oops!</h1>
                <p>
                    It seems you do not have AbbyBot on any server, nor are you on a server where AbbyBot is. :(
                </p>
                <div className="d-flex flex-center gap-4">
                    <button className="btn-primary" onClick={() => window.open(DISCORD_ADD_BOT_URL, "_blank")}>Add AbbyBot to my server</button>
                    <button className="btn-secondary" onClick={() => redirect("/") }>Back to home</button>
                </div>
            </section>
            <footer style={{ margin: "0px 100px" }}>
                <p>
                    The system will only show servers where you are joined and AbbyBot is also
                    present, if your server does not appear, please reload the page.
                </p>
            </footer>
        </main>
    )
}
