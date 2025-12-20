import Sidebar from '../../components/Sidebar';
import './Location.css';

export default function Location() {
  const sidebarItems = [
    { label: '인사말', href: '/company/greeting', active: false },
    { label: '연혁', href: '/company/history', active: false },
    { label: '오시는길', href: '/company/location', active: true },
  ];

  return (
    <div className="section container layout-with-sidebar">
      <Sidebar title="회사소개" items={sidebarItems} />
      <div className="content">
        <h3 className="page-title">오시는길</h3>

        {/* Map Section */}
        <div className="map-container">
          <div className="map-placeholder">
            Map Visualization Placeholder
          </div>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h4>HEAD OFFICE</h4>
            <div className="info-content">
              <p><strong>주소:</strong> 서울특별시 금천구 가산디지털2로 14 506 (가산동, 대륭테크노타운12차)</p>
              <p><strong>전화:</strong> 02-884-2053</p>
              <p><strong>팩스:</strong> 02-879-2053</p>
              <p><strong>이메일:</strong> okg1015@naver.com</p>
            </div>
          </div>
          <div className="info-card">
            <h4>FACTORY</h4>
            <div className="info-content">
              <p><strong>주소:</strong> 서울특별시 금천구 가산디지털2로 14 506 (가산동, 대륭테크노타운12차)</p>
              <p><strong>전화:</strong> 02-884-2053</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
