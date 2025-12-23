import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/whiten.svg" alt="logo" className="logo-icon" />
              <span>현대모터스</span>
            </Link>
            <p className="footer-desc">
              미래를 위한 혁신<br />
              글로벌 모터 기술 리더
            </p>
          </div>

          <div className="footer-info">
            <h3>고객센터</h3>
            <p>서울특별시 금천구 가산디지털2로 14<br />대륭테크노타운12차 506호</p>
            <p>Tel: 02-884-2053 | Fax: 02-879-2053</p>
            <p>Email: okg1015@naver.com</p>
            <p>사업자등록번호: 119-04-34520</p>
          </div>

          <div className="footer-links">
            <h3>바로가기</h3>
            <ul>
              <li><Link to="/company/greeting">회사소개</Link></li>
              <li><Link to="/products/bldc">제품소개</Link></li>
              <li><Link to="/contact">고객센터</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © {new Date().getFullYear()} 현대모터스. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
