import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [emailSent, setEmailSent] = useState(false);

	const form = useRef();

	const service = process.env.REACT_APP_SERVICE;
	const template = process.env.REACT_APP_TEMPLATE;
	const key = process.env.REACT_APP_KEY;

	const sendEmail = (event) => {
		if (event) event.preventDefault();

		emailjs.sendForm(service, template, form.current, key).then(
			(result) => {
				if (result.text === "OK") setEmailSent(true);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	const styles = {
		container: "text-center p-8",
		input: "rounded-lg p-2 w-full md:w-1/2 lg:w-1/3",
		element: "mb-4",
		button: "p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 bg-white ",
		header: "text-white text-center",
		info: "italic text-right text-gray-700 p-4",
		result: "font-bold text-white",
	};

	return (
		<div>
			{!emailSent && (
				<div className={styles.container}>
					<form ref={form} onSubmit={sendEmail}>
						<div className={styles.element}>
							<input
								type="email"
								name="email"
								value={email}
								onChange={(event) =>
									setEmail(event.target.value)
								}
								className={styles.input}
								placeholder="your@email.ca"
								required
							/>
						</div>
						<div className={styles.element}>
							<input
								type="text"
								name="subject"
								value={subject}
								onChange={(event) =>
									setSubject(event.target.value)
								}
								className={styles.input}
								placeholder="Subject"
								required
							/>
						</div>
						<div className={styles.element}>
							<textarea
								name="message"
								rows="5"
								value={message}
								onChange={(event) =>
									setMessage(event.target.value)
								}
								className={styles.input}
								placeholder="Your Message"
								required
							/>
						</div>

						<div className={styles.element}>
							<input
								type="submit"
								className={styles.button}
								value="Send Email"
							/>
						</div>
					</form>
					<p className={styles.info}>
						Feel free to use this form to get in contact with me, or
						if you have any questions, concerns, or feedback. :)
					</p>
				</div>
			)}

			{emailSent && (
				<div className={styles.container}>
					<p classname={styles.result}>Email Sent, Thank You.</p>
				</div>
			)}
		</div>
	);
};

export default ContactForm;
