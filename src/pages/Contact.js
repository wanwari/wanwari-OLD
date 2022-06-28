import Tabs from "../components/Tabs/Tabs";
import AddressBar from "../components/AddressBar/AddressBar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

const style = {
	container: "flex flex-col h-screen justify-between",
};

const Contact = () => {
	const screenWidth = window.screen.width;
	const responsiveAddressBar =
		screenWidth >= 1024 ? <AddressBar pageName="contact" /> : null;
	return (
		<div className={style.container} style={{ backgroundColor: "#f96672" }}>
			<div>
				<Tabs active={2} />
				{responsiveAddressBar}
			</div>

			<ContactForm />

			<Footer />
		</div>
	);
};

export default Contact;
