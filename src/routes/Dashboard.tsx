import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return <>
    {
      user ? <main className="container">
        <div style={{ maxWidth: 690, marginBottom: "50px" }}>
          <h1 className="text-light">Welcome to AbbyBot's dashboard,
            <span className="text-tertiary text-italic"> {user.username}</span>
          </h1>
          <p className="text-light">
            In the AbbyBot dashboard you can configure AbbyBot settings on your personal server, or on one that you manage, as long as AbbyBot is present on the server.
          </p>
        </div>
      </main> :
      <div>loading</div>
    }
  </>
}
