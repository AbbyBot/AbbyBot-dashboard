import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate, useSearchParams } from "react-router-dom"

export function Auth() {
    const [searchParams] = useSearchParams()
    const { exchangeCode } = useContext(AuthContext)
    const redirect = useNavigate();
    useEffect(() => {
        const code = searchParams.get("code")
        if (code) {
            exchangeCode(code, () => {
                redirect("/dashboard")
            });
        } else {
            console.log("code not provided")
        }
    }, [])

    return <>
        Loggin in... please waito.
    </>
}