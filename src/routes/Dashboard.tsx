import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  if (user) {
    return <main className="container content d-flex flex-column flex-center slideIn" >
      <section className="grid grid-2 gap-3">
        <div className="column-1">
          <h1 className="text-light">Welcome to AbbyBot's dashboard,
            <span className="text-tertiary text-italic"> {user.username}</span>
          </h1>
          <p className="text-light">
            In the AbbyBot dashboard you can configure AbbyBot settings on your personal server, or on one that you manage, as long as AbbyBot is present on the server.
          </p>
        </div>
        <div className="column-1">
            <button className="btn-primary">Select a server</button>
        </div>
      </section>
    </main>
  }

  if (!user) {
    return <div style={{ height: "calc(100vh - 80px)" }} className="gap-3 d-flex flex-center flex-center-items">
      <div className="spinner"></div>
    </div>
  }
}
