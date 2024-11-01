import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import Init from "../components/Init"; // Import Init component

export function Auth() {
    const [searchParams] = useSearchParams();
    const [error, setError] = useState(false);
    const { exchangeCode, login } = useContext(AuthContext);
    const redirect = useNavigate();
    let code = searchParams.get("code");
    let error_description = searchParams.get("error_description");

    useEffect(() => {
        if (code) {
            exchangeCode(code, () => {
                redirect("/dashboard");
            });
        }
        if (error_description) {
            setError(true);
        }
        if (!code && !error_description) {
            redirect("/");
        }
    }, []);

    if (error) {
        return (
            <div className="vh100 gap-3 d-flex flex-center flex-center-items text-light flex-column">
                <h1>Oops... An error occurred during authentication!</h1>
                <h2>Error: {error_description}</h2>
                <div className="grid grid-2 gap-4">
                    <button className="btn-primary" onClick={() => login()}>Try again</button>
                    <button className="btn-secondary" onClick={() => redirect("/")}>Go Home</button>
                </div>
            </div>
        );
    }
    return (
        <div className="vh100 gap-3 d-flex flex-center flex-center-items">
            <Init /> {}
        </div>
    );
}