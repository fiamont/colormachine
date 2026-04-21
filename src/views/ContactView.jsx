import ContactForm from "../components/ContactForm";

function ContactView() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-4">
      <h2 className="text-center">Contact</h2>
      <p className="m-0">
        Do you have any problems with the website or any color questions?
      </p>
      <p className="m-0">Use the contact form below, thanks!</p>
      <div className="p-0 p-sm-3 m-0 m-sm-3 align-self-center contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactView;
