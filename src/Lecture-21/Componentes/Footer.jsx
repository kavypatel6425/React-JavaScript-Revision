import "../Styles/layout.css"

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>NovaTech</h2>

          <p>
            Creating modern digital experiences and helping businesses grow
            through technology.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Ahmedabad, Gujarat</p>
          <p>info@novatech.com</p>
          <p>+91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 NovaTech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;