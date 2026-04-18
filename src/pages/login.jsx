import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: userId, password }),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.userId);

            navigate("/gallery");
        } else {
            alert(data.error);
        }
    };
    const handleReset = async (e) => {
        e.preventDefault();

        if (!userId.trim()) {
            alert("Please enter your ID");
            return;
        }

        const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: userId }),
        });

        const data = await res.json();

        if (res.ok) {
            alert("Reset link sent to your registered email");
        } else {
            alert(data.error);
        }
    };


    return (
        <>
            <div className="background-login">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className="login-form" onSubmit={handleLogin}>
                <h3>Login Here</h3>

                <label htmlFor="username">Unique ID</label>
                <input
                    type="text"
                    placeholder="ID"
                    id="username"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Log In</button>
                <button type="button" onClick={handleReset} id="forgot-btn">Forgot Password?</button>
        </form >
        </>
    );
}

export default Login;
