import { useState } from "react";
import FadeUp from "./fadeup";

function Contact() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phno: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/auth/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (res.ok) {
            alert("✅ Enquiry sent successfully!");
        } else {
            alert("❌ Failed to send enquiry");
        }
    };
    return (
        <div className="contact-us-div" id="contact-us-div">
            <div className="left-contact">
                <FadeUp>
                    <p id="contact-title">Let's Build <br />
                        Your Brand <br />
                        Together</p>
                </FadeUp>
            </div>
            <div className="right-contact">
                <form action="" className='contact-form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fname"
                        placeholder='First Name*'
                        id='name'
                        onChange={handleChange} />
                    <input
                        type="text"
                        name="lname"
                        placeholder='Last Name'
                        id='name'
                        onChange={handleChange} /><br />
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address*'
                        id='details'
                        onChange={handleChange} />
                    <input
                        type="text"
                        name="phno"
                        placeholder='Phone Number'
                        id='details'
                        onChange={handleChange} /><br />
                    <select
                        name="service"
                        id="service-dropdwn"
                        onChange={handleChange}>
                        <option value="Branding">Select your option</option>
                        <option value="Branding">Branding</option>
                        <option value="CD">Creative Direction</option>
                        <option value="SMO">Social Media Optimization</option>
                    </select><br />
                    <textarea
                        name="message"
                        id="message"
                        placeholder='Type your message...'
                        onChange={handleChange}></textarea><br />
                    <button id="contact-btn" type="submit">GET IN TOUCH</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;