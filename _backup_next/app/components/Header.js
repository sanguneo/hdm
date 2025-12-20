'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
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
    { label: '개발 프로세스', href: '/development' },
    { label: '고객센터', href: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${!isHome ? 'subpage' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          현대모터스
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={pathname.startsWith(item.href) ? 'active' : ''}>
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
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          height: var(--header-height);
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s;
        }

        .header.scrolled,
        .header.subpage {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-sm);
          border-bottom: 1px solid var(--border-color);
        }

        .header-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 26px;
          font-weight: 900;
          color: var(--primary-color);
          letter-spacing: -0.5px;
          z-index: 1001;
        }

        .desktop-nav ul {
          display: flex;
          gap: 32px;
        }

        .desktop-nav a {
          font-size: 16px;
          font-weight: 500;
          color: var(--text-primary);
          padding: 8px 0;
          position: relative;
        }

        .desktop-nav a:hover,
        .desktop-nav a.active {
          color: var(--accent-color);
        }

        .desktop-nav a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-color);
          transition: width 0.3s;
        }

        .desktop-nav a:hover::after,
        .desktop-nav a.active::after {
          width: 100%;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 30px;
          height: 24px;
          position: relative;
          z-index: 1001;
        }

        .hamburger {
          width: 100%;
          height: 2px;
          background: var(--text-primary);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: var(--text-primary);
          transition: all 0.3s;
        }

        .hamburger::before { top: -8px; }
        .hamburger::after { top: 8px; }

        .hamburger.open { background: transparent; }
        .hamburger.open::before { top: 0; transform: rotate(45deg); }
        .hamburger.open::after { top: 0; transform: rotate(-45deg); }

        .mobile-nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: white;
          padding-top: 100px;
          transition: right 0.3s ease;
          z-index: 1000;
        }

        .mobile-nav.open {
          right: 0;
        }

        .mobile-nav ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .mobile-nav a {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-primary);
        }

        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </header>
  );
}
