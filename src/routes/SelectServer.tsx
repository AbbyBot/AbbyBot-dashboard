import { useNavigate } from "react-router-dom"
import { DISCORD_ADD_BOT_URL } from "../env";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SelectServer() {
    const redirect = useNavigate();
    const { servers } = useContext(AuthContext);
    if (!servers) {
        return (
            <main className="container text-light d-flex  text-center flex-center  flex-center-items flex-column slideIn" style={{ height: "calc(100vh - 80px)" }}>
                <section className="d-flex flex-column flex-center flex-grow-1">
                    <h1>Oops!</h1>
                    <p>
                        It seems you do not have AbbyBot on any server, nor are you on a server where AbbyBot is. :(
                    </p>
                    <div className="d-flex flex-center gap-4">
                        <button className="btn-primary" onClick={() => window.open(DISCORD_ADD_BOT_URL, "_blank")}>Add AbbyBot to my server</button>
                        <button className="btn-secondary" onClick={() => redirect("/")}>Back to home</button>
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
    if (servers) {

        return <div>
            <h1 className="text-light">Select your server</h1>
            <ul>
                {
                    servers.servers.map((server: any) => {
                        return <li>
                            <span>
                                {server.guild_name}
                            </span>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}
