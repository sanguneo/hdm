import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: '회사소개', href: '/company/greeting' },
    { label: '적용분야', href: '/business' },
    { label: '제품소개', href: '/products/bldc' },
    { label: '생산 프로세스', href: '/production' },
    { label: '고객센터', href: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${!isHome ? 'subpage' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          현대모터스
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={pathname.startsWith(item.href) ? 'active' : ''}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
