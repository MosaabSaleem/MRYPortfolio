export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>If you have any questions or would like to get in touch, feel free to reach out!</p>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}