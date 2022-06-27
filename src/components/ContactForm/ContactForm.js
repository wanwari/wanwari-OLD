import { useState } from "react";

const ContactForm = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		console.log("clicked");
	};

	const styles = {
		container: "text-center p-8",
		input: "rounded-lg p-2 w-full md:w-1/2 lg:w-1/3",
		element: "mb-4",
		button: "p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 bg-white ",
		header: "text-white text-center",
		info: "italic text-right text-gray-700 p-4",
	};

	return (
		<div className={styles.container}>
			<form>
				<div className={styles.element}>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						className={styles.input}
						placeholder="your@email.ca"
					/>
				</div>
				<div className={styles.element}>
					<input
						type="text"
						name="subject"
						value={subject}
						onChange={(event) => setSubject(event.target.value)}
						className={styles.input}
						placeholder="Subject"
					/>
				</div>
				<div className={styles.element}>
					<textarea
						name="message"
						rows="5"
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						className={styles.input}
						placeholder="Your Message"
					/>
				</div>

				<div className={styles.element}>
					<button
						onClick={(event) => handleSubmit(event)}
						className={styles.button}
					>
						Send
					</button>
				</div>
			</form>
			<p className={styles.info}>
				Feel free to use this form to get in contact with me, or if you
				have any questions, concerns, or feedback. :)
			</p>
		</div>
	);
};

export default ContactForm;
