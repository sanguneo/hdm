'use client';
export default function Contact() {
  return (
    <div className="section container">
      <div className="page-header">
        <h2 className="title">고객센터</h2>
        <p className="description">궁금하신 점이 있으시면 언제든지 문의해주세요.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="info-block">
            <h3>Head Office & Factory</h3>
            <p>서울특별시 금천구 가산디지털2로 14 506 (가산동, 대륭테크노타운12차)</p>
          </div>
          
          <div className="info-block">
            <h3>Contact Info</h3>
            <p className="contact-row"><span>Tel:</span> 02-884-2053</p>
            <p className="contact-row"><span>Fax:</span> 02-879-2053</p>
            <p className="contact-row"><span>H.P:</span> 010-8788-5356</p>
            <p className="contact-row"><span>Email:</span> okg1015@naver.com</p>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>온라인 문의</h3>
          <form className="form-grid">
            <div className="form-group">
              <label>회사명</label>
              <input type="text" placeholder="회사명을 입력하세요" />
            </div>
            <div className="form-group">
              <label>담당자명</label>
              <input type="text" placeholder="담당자 성함을 입력하세요" />
            </div>
            <div className="form-group full">
              <label>연락처</label>
              <input type="text" placeholder="연락받으실 번호를 입력하세요" />
            </div>
            <div className="form-group full">
              <label>문의내용</label>
              <textarea placeholder="궁금하신 내용을 작성해주세요"></textarea>
            </div>
            <button type="submit" className="submit-btn">문의하기</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .page-header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .title {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 16px;
            color: var(--primary-color);
        }

        .description {
            color: var(--text-secondary);
            font-size: 1.1rem;
        }

        .contact-layout {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 60px;
            align-items: start;
        }

        .info-block {
            margin-bottom: 40px;
        }

        .info-block h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 16px;
            color: var(--primary-color);
            border-left: 4px solid var(--accent-color);
            padding-left: 16px;
        }

        .info-block p {
            color: var(--text-secondary);
            font-size: 1.1rem;
            line-height: 1.6;
        }

        .contact-row {
            display: flex;
            gap: 10px;
            margin-bottom: 8px;
        }

        .contact-row span {
            font-weight: 600;
            width: 50px;
            color: var(--text-primary);
        }

        .contact-form-card {
            background: white;
            padding: 40px;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            border: 1px solid var(--border-color);
        }

        .contact-form-card h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 30px;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .form-group.full {
            grid-column: span 2;
        }

        .form-group label {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .form-group input,
        .form-group textarea {
            padding: 12px;
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            font-size: 1rem;
            background: #f8fafc;
            transition: all 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            background: white;
            border-color: var(--accent-color);
            outline: none;
            box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }

        .form-group textarea {
            min-height: 150px;
            resize: vertical;
        }

        .submit-btn {
            grid-column: span 2;
            background: var(--primary-color);
            color: white;
            padding: 16px;
            border: none;
            border-radius: var(--radius-sm);
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            margin-top: 20px;
        }

        .submit-btn:hover {
            background: var(--text-primary);
            transform: translateY(-2px);
            box-shadow: var(--shadow-sm);
        }

        @media (max-width: 900px) {
            .contact-layout {
                grid-template-columns: 1fr;
                gap: 40px;
            }
        }
      `}</style>
    </div>
  );
}
