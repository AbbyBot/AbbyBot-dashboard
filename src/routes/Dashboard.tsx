import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { faCircleInfo, faGear, faList, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const redirect = useNavigate();
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
          <div className="mt-4 d-flex gap-3">
            <button className="btn-primary d-flex gap-2 flex-center-items" onClick={() => redirect("/dashboard/select-server")}>
              <FontAwesomeIcon icon={faServer}></FontAwesomeIcon>
              Select a server
            </button>
            <button className="btn-secondary d-flex gap-2 flex-center-items"><FontAwesomeIcon icon={faList} /> View Logs</button>
            <button className="btn-tertiary d-flex gap-2 flex-center-items"><FontAwesomeIcon icon={faGear} /> Go settings</button>
            <button className="btn-navbar d-flex gap-2 flex-center-items" ><FontAwesomeIcon icon={faCircleInfo} /> My Profile</button>
          </div>
        </div>
      </section>
    </main>
  }

  if (!user) {
    return <Spinner minusHeight={80} />
  }
}
