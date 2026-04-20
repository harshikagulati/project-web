import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            alert("Please fill all fields");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const res = await fetch(
            `https://houseofmedia.onrender.com/api/auth/reset-password/${token}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ newPassword: password }),
            }
        );

        const data = await res.json();

        if (res.ok) {
            alert("Password reset successful");
            navigate("/login"); // redirect after success
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
            <form className="login-form" onSubmit={handleReset}>
                <h3>Set new password</h3>

                <label htmlFor="">New password</label>
                <input
                    type="password"
                    placeholder="New password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="password">Confirm password</label>
                <input
                    type="password"
                    placeholder="Confirm password"
                    id="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)} />

                <button type="submit">Reset Password</button>
            </form >
        </>
    );
}

export default ResetPassword;
