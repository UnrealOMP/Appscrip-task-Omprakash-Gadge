export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__logo">
          <span className="site-header__logo-icon">◼</span>
          <span className="site-header__logo-text">LOGO</span>
        </div>
        <nav className="site-header__nav" aria-label="Main navigation">
          <ul className="site-header__nav-list">
            <li><a href="/">SHOP</a></li>
            <li><a href="/skills">SKILLS</a></li>
            <li><a href="/stories">STORIES</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT US</a></li>
          </ul>
        </nav>
        <div className="site-header__utils">
          <button className="site-header__icon" aria-label="Search">
            <span className="site-header__icon-search">⌕</span>
          </button>
          <button className="site-header__icon" aria-label="Wishlist">
            <span className="site-header__icon-heart">♡</span>
          </button>
          <button className="site-header__icon" aria-label="Shopping bag">
            <span className="site-header__icon-bag">🛍</span>
          </button>
          <button className="site-header__icon" aria-label="Account">
            <span className="site-header__icon-user">👤</span>
          </button>
          <div className="site-header__lang">
            <span>ENG</span>
            <span className="site-header__lang-arrow">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
}
