import "../pages.css/contact.css";

function Contact_1() {
  return (
    <div className="contact-content">
      <h1>Contact Us</h1>
      <p>
        Have questions or need assistance? Feel free to reach out to us. Our
        team is here to help and <br></br> ensure you have the best experience on{" "}
        <strong>Community Management</strong>.
      </p>

      <h2>Get in Touch</h2>
      <p>
        You can contact us through the following channels. Whether it is support,
        feedback, or general inquiries, we are here to assist you.
      </p>

      <div className="contact-details">
        <div className="contact-box">
          <h3>Email</h3>
          <p>📧 support@community.com</p>
        </div>

        <div className="contact-box">
          <h3>Phone</h3>
          <p>📞 +91 98765 43210</p>
        </div>

        <div className="contact-box">
          <h3>Address </h3>
          <p>🏢 500033, Hi-Teach City, Hyderabad, India</p>
        </div>
      </div>

      <h2>Support Hours</h2>
      <p>Our support team is available:</p>
      <ul className="u">
        <li className="l">Monday - Friday: 9 AM - 6 PM</li>
        <li className="l">Saturday: 10 AM - 4 PM</li>
        <li className="l">Sunday: Closed</li>
      </ul>

      <h2>Connect With Us</h2>
      <div className="social-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          🌐 Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 LinkedIn
        </a>
      </div>

      <p className="closing">
        <strong>We look forward to hearing from you!</strong> Stay connected and
        be part of our growing community.
      </p>
    </div>
  );
}

export default Contact_1;
