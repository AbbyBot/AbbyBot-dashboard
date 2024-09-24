import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { DISCORD_AVATAR_URL } from "../env";

export default function Profile() {
    const { user } = useContext(AuthContext);
    return <>
        {user &&
            <main className="container-md">
                <aside>
                    <div>
                        <p className="text-light">
                            Your profile picture
                        </p>
                        <img draggable={false} className="rounded" width={150} src={DISCORD_AVATAR_URL + `${user.id}/${user.avatar}`} alt="" />
                        <p className="text-light">
                            {user.global_name}
                        </p>
                    </div>
                </aside>
            </main>
        }
    </>
}
