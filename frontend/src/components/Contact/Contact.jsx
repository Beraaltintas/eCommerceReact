import React, { useEffect, useState } from "react";
import "./Contact.css";
import { message } from "antd";
const Contact = () => {
  const [info, setInfo] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/information`);

        if (response.ok) {
          const data = await response.json();
          setInfo(data);
          console.log(data);
        } else {
          message.error("Data Fetch Failed");
        }
      } catch (error) {
        console.log("Data error", error);
      }
    };
    fetchInfo();
  }, [apiUrl]);

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-top">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49317.657307311565!2d29.94584153418674!3d39.41612824405948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c948171562e423%3A0x7357c4e7ede1b93c!2zS8O8dGFoeWEsIEvDvHRhaHlhIE1lcmtlei9Lw7x0YWh5YQ!5e0!3m2!1str!2str!4v1740580989616!5m2!1str!2str"
              width="100%"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-titles">
            <h4>Contact with us</h4>
            <h2>Get In Touch</h2>
            <p>
              In hac habitasse platea dictumst. Pellentesque viverra sem nec
              orci lacinia, in bibendum urna mollis. Quisque nunc lacus, varius
              vel leo a, pretium lobortis metus. Vivamus consectetur consequat
              justo.
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  Your name
                  <span>* </span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Your Email
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Subject
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Your Message
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong>{info[0]?.name}</strong>
                  <p className="contact-street">{info[0]?.address}</p>
                  <a href={`tel:${info[0]?.phone}`}>
                    Phone: {info[0]?.phone}
                  </a>
                  <a href={`mailto:Email: ${info[0]?.email}`}>
                    {info[0]?.email}
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong>Opening Hours</strong>
                  <p className="contact-date">{info[0]?.open_hours}</p>
                  <p>Weekend Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
