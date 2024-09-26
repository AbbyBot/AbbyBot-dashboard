import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { DISCORD_AVATAR_URL } from "../env";

export default function Profile() {
    const { user } = useContext(AuthContext);

    if (user) {
        return <main className="container content grid grid-12 slideIn">
            <aside className="column-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }} >
                <p className="text-light text-condensed">
                    Your profile picture
                </p>
                <img draggable={false} className="circled" width={200} src={DISCORD_AVATAR_URL + `${user.id}/${user.avatar}`} alt="" />
                <span className="text-light text-condensed">
                    What a handsome, uh?
                </span>
            </aside>
            <aside className="column-9 container">
                <h1 className="text-light">
                    My Profile
                </h1>
                <p className="text-light">
                    AbbyBot collects only public user data, it will never use your personal information without authorization.
                </p>
                <br />
                <div>
                    <h2 className="text-light">
                        What does AbbyBot know about you?
                    </h2>
                    <div className="grid grid-2">
                        <section className="text-light">
                            <div style={{ maxWidth: "200px" }}>
                                <h3>Discord username</h3>
                                <span className="text-italic text-condensed">{user.username}</span>
                                <hr />
                            </div>
                            <div style={{ maxWidth: "200px" }}>
                                <h3>Discord nickname</h3>
                                <span className="text-italic text-condensed">{user.global_name}</span>
                                <hr />
                            </div>
                            <div style={{ maxWidth: "200px" }}>
                                <h3>User ID</h3>
                                <span className="text-italic text-condensed">{user.id}</span>
                                <hr />
                            </div>
                        </section>
                        <section className="text-light">
                            <p>Faltan cositas por aqui 👇</p>
                        </section>
                    </div>
                </div>
            </aside>
        </main>
    }

    return <></>
}
