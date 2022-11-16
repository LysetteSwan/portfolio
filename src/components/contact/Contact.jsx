// import React from "react";
import "./styles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ltno5vn",
      "template_52srbdg",
      form.current,
      "WNsproV4faKNKyPaV"
    );
    e.target.reset();
  };

  return (
    <div>
      <div className="contactDiv">
        <h3 className="contactTitle">Contact Me</h3>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <div className="contactFormDiv">
            <label className="contactFormTag"> Name</label>
            <input
              type="text"
              name="name"
              className="contactFormInput"
              placeholder="Insert your name"
            />
          </div>

          <div className="contactFormDiv">
            <label className="contactFormTag">E-Mail</label>
            <input
              type="email"
              name="email"
              className="contactFormInput"
              placeholder="Insert your email"
            />
          </div>
          <div className="contactFormDiv">
            <label className="contactFormTag"> Message</label>
            <textArea
              name="message"
              cols="30"
              rows="10"
              className="contactFormInput"
              placeholder="Write your message here"
            ></textArea>
          </div>
          <button className="button">Send Message</button>
        </form>
      </div>
    </div>
  );
}
