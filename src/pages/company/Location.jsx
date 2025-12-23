import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';

export default function Location() {
  const sidebarItems = [
    { label: '인사말', href: '/company/greeting', active: false },
    { label: '연혁', href: '/company/history', active: false },
    { label: '오시는길', href: '/company/location', active: true },
  ];

  return (
    <div className="section container layout-with-sidebar">
      <SEO title="오시는길" description="현대모터스 본사 및 공장 위치 안내." url="/company/location" />
      <Sidebar title="회사소개" items={sidebarItems} />
      <div className="content">
        <h3 className="page-title">오시는길</h3>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?q=37.469706,126.88424&hl=ko&z=16&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hyundai Motors Location"
          ></iframe>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h4>OFFICE</h4>
            <div className="info-content">
              <p><strong>주소:</strong> 서울특별시 금천구 가산디지털2로 14 대륭테크노타운12차 506호</p>
              <p><strong>전화:</strong> 02-884-2053</p>
              <p><strong>팩스:</strong> 02-879-2053</p>
              <p><strong>이메일:</strong> okg1015@naver.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
