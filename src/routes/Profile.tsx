import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { DISCORD_AVATAR_URL } from "../env";

export default function Profile() {
    const { user } = useContext(AuthContext);
    return <>
        {user &&
            <main className="container grid grid-6">
                <aside className="column-1">
                    <p className="text-light">
                        Your profile picture
                    </p>
                    <img draggable={false} className="circled" width={150} src={DISCORD_AVATAR_URL + `${user.id}/${user.avatar}`} alt="" />
                    <span className="text-light">
                        What a handsome, uh?
                    </span>
                </aside>
                <aside className="column-6">
                    <h1 className="text-light">
                        My Profile
                    </h1>
                    <p className="text-light">
                        AbbyBot collects only public user data, it will never use your personal information without authorization.
                    </p>
                    <div>
                        <h2 className="text-light">
                            What does AbbyBot know about you?
                        </h2>
                        <div className="grid grid-2">
                            <section className="text-light">
                                <h3>Discord username</h3>
                                <p>{user.username}</p>
                                <h3>Discord nickname</h3>
                                <p>{user.global_name}</p>
                                <h3>User ID</h3>
                                <p>{user.id}</p>
                            </section>
                            <section >
                                <p>Hola</p>
                            </section>
                        </div>
                    </div>
                </aside>
            </main>
        }
    </>
}
