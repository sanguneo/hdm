import SEO from '../components/SEO';

async function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;

  const payload = {
    company: form.company.value,
    name: form.name.value,
    phone: form.phone.value,
    message: form.message.value,
  };

  const res = await fetch('https://script.google.com/macros/s/AKfycbw1quVnZD9dsXpRED41gYBNmsVzLEk8wX3yp0KEqxaYucfe6RZMN7g-Jfl51nT-mNXLbA/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    alert('문의가 정상적으로 접수되었습니다.');
    form.reset();
  } else {
    alert('전송 중 오류가 발생했습니다.');
  }
}


export default function Contact() {
  return (
    <div className="section container">
      <SEO
        title="고객센터"
        description="현대모터스 고객센터. 제품 문의, 견적 요청, AS 안내."
        url="/contact"
      />
      <div className="page-header">
        <h2 className="title">고객센터</h2>
        <p className="description">궁금하신 점이 있으시면 언제든지 문의해주세요.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="info-block">
            <h3>Office & Factory</h3>
            <p>서울특별시 금천구 가산디지털2로 14<br />대륭테크노타운12차 506호</p>
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
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>회사명</label>
              <input type="text" placeholder="회사명을 입력하세요" name="company" />
            </div>
            <div className="form-group">
              <label>담당자명</label>
              <input type="text" placeholder="담당자 성함을 입력하세요" name="name" />
            </div>
            <div className="form-group full">
              <label>연락처</label>
              <input type="text" placeholder="연락받으실 번호를 입력하세요" name="phone" />
            </div>
            <div className="form-group full">
              <label>문의내용</label>
              <textarea placeholder="궁금하신 내용을 작성해주세요" name="message"></textarea>
            </div>
            <button type="submit" className="submit-btn">문의하기</button>
          </form>
        </div>
      </div>
    </div>
  );
}
