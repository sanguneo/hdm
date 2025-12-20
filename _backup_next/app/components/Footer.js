'use client';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">현대모터스</h2>
            <p className="footer-desc">
              미래를 위한 혁신<br/>
              글로벌 모터 기술 리더
            </p>
          </div>
          
          <div className="footer-info">
            <h3>고객센터</h3>
            <p>서울특별시 금천구 가산디지털2로 14 506 (가산동, 대륭테크노타운12차)</p>
            <p>Tel: 02-884-2053 | Fax: 02-879-2053</p>
            <p>Email: okg1015@naver.com</p>
            <p>사업자등록번호: 119-04-34520</p>
          </div>

          <div className="footer-links">
            <h3>바로가기</h3>
            <ul>
                <li><a href="/company/greeting">회사소개</a></li>
                <li><a href="/products/bldc">제품소개</a></li>
                <li><a href="/contact">고객센터</a></li>
            </ul> 
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © {new Date().getFullYear()} 현대모터스. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #1a1f2c;
          color: #e2e8f0;
          padding: 60px 0 20px;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-logo {
          font-size: 24px;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
        }

        .footer-desc {
          color: #94a3b8;
          line-height: 1.6;
        }

        h3 {
          color: white;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .footer-info p {
          color: #94a3b8;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .footer-links ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .footer-links a {
            color: #94a3b8;
            font-size: 14px;
            transition: color 0.2s;
        }

        .footer-links a:hover {
            color: white;
        }

        .footer-bottom {
          border-top: 1px solid #334155;
          padding-top: 20px;
          text-align: center;
          font-size: 13px;
          color: #64748b;
        }
      `}</style>
    </footer>
  );
}
