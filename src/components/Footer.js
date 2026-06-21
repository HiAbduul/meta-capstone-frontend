import Logo from "..//assets/logo-white.png";

export default function Footer() {
  return (
    <footer className="footer-background">
      <div className="footer-container">
        <section className="footer-brand">
          <img src={Logo} alt="Little Lemon Restaurant Logo" />
          <p>
            Little Lemon is a cozy neighborhood bistro offering simple, vibrant dishes and classic cocktails in a relaxed, lively atmosphere. We pride ourselves on a locally-sourced menu featuring
            fresh daily specials.
          </p>
        </section>

        <section className="footer-content">
          <div className="locations">
            <h3>Locations</h3>
            <ul>
              <li>Accra (Main)</li>
              <li>Kumasi</li>
              <li>Takoradi</li>
              <li>Tamale</li>
            </ul>
          </div>

          <div className="opening-times">
            <h3>Opening Hours</h3>
            <ul>
              <li>Mon - Thu: 11:00 AM - 11:00 PM</li>
              <li>Fri - Sat: 11:00 AM - 1:00 AM</li>
              <li>Sun: 10:00 AM - 10:00 PM</li>
            </ul>
          </div>

          <address className="contact">
            <h3>Contact Us</h3>
            <ul>
              <li>96 Abafom Road, North Ridge, Accra</li>
              <li>
                <a href="tel:+2332079280678">Tel: 020 7928 0678</a>
              </li>
              <li>
                <a href="mailto:hello@littlelemon.com">Email: hello@littlelemon.com</a>
              </li>
            </ul>
          </address>
        </section>

        <div className="copyright">
          <small>&copy; 2026 Little Lemon Ltd. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
