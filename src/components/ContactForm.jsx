import { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const formRef = useRef();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    notARobot: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(
          () => {
            console.log("Email sent!");
            alert("Your message was sent!");
            setFormData({
              name: "",
              email: "",
              message: "",
              notARobot: false,
            });
            setValidated(false);
            formRef.current.reset();
          },
          (error) => {
            console.log("An error occured:", error.text);
            alert("An error occured and the message was not sent.");
          },
        );
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      ref={formRef}
      className="d-flex flex-column w-100"
    >
      <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          name="name"
          placeholder="First Last"
          value={formData.name}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Name missing.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Email missing or doesn't contain @.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={5}
          name="message"
          placeholder="Write your message here"
          value={formData.message}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Message missing.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Check
          required
          label="I am not a robot"
          name="notARobot"
          feedback="Check the box."
          feedbackType="invalid"
          checked={formData.notARobot}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        type="submit"
        variant="secondary"
        className="w-75 mt-4 align-self-center"
      >
        Send message
      </Button>
      <p className="p-message"></p>
    </Form>
  );
}

export default ContactForm;
