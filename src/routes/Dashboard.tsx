import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import Spinner from "../components/Spinner";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  if (user) {
    return <main className="container content d-flex flex-column flex-center slideIn" >
      <section className="grid grid-2 gap-4">
        <div className="column-1">
          <h1 className="text-light">Welcome to AbbyBot's dashboard,
            <span className="text-tertiary text-italic"> {user.username}</span>
          </h1>
          <p className="text-light">
            In the AbbyBot dashboard you can configure AbbyBot settings on your personal server, or on one that you manage, as long as AbbyBot is present on the server.
          </p>
          <div className="mt-4">
            <button className="btn-primary">Select a server</button>
          </div>
        </div>
      </section>
    </main>
  }

  if (!user) {
    return <Spinner minusHeight={80} />
  }
}
