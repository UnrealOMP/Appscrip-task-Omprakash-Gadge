export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__section">
            <h3 className="site-footer__heading">BE THE FIRST TO KNOW</h3>
            <p className="site-footer__text">
              Sign up for updates from mettä muse.
            </p>
            <div className="site-footer__newsletter">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="site-footer__input"
              />
              <button className="site-footer__button">SUBSCRIBE</button>
            </div>
          </div>
          <div className="site-footer__section">
            <h3 className="site-footer__heading">CONTACT US</h3>
            <p className="site-footer__text">+44 221 133 5360</p>
            <p className="site-footer__text">customercare@mettamuse.com</p>
          </div>
          <div className="site-footer__section">
            <h3 className="site-footer__heading">CURRENCY</h3>
            <p className="site-footer__text">• USD</p>
            <p className="site-footer__text site-footer__text--small">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <div className="site-footer__divider"></div>
        <div className="site-footer__middle">
          <div className="site-footer__column">
            <h3 className="site-footer__heading">mettä muse</h3>
            <ul className="site-footer__links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/stories">Stories</a></li>
              <li><a href="/artisans">Artisans</a></li>
              <li><a href="/boutiques">Boutiques</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/compliance">EU Compliances Docs</a></li>
            </ul>
          </div>
          <div className="site-footer__column">
            <h3 className="site-footer__heading">QUICK LINKS</h3>
            <ul className="site-footer__links">
              <li><a href="/orders">Orders & Shipping</a></li>
              <li><a href="/seller">Join/Login as a Seller</a></li>
              <li><a href="/payment">Payment & Pricing</a></li>
              <li><a href="/returns">Return & Refunds</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="site-footer__column">
            <h3 className="site-footer__heading">FOLLOW US</h3>
            <div className="site-footer__social">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
            <div className="site-footer__payment">
              <h3 className="site-footer__heading">mettä muse ACCEPTS</h3>
              <div className="site-footer__payment-icons">
                <span>GPay</span>
                <span>Visa</span>
                <span>Mastercard</span>
                <span>AMEX</span>
                <span>Apple Pay</span>
                <span>Shop Pay</span>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__divider"></div>
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            Copyright © {year} mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
