import './Contact.css';

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
    </div>
  );
}
