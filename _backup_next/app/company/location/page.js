'use client';
import Sidebar from '@/app/components/Sidebar';

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

      <style jsx>{`
        .layout-with-sidebar {
          display: flex;
          gap: 80px;
          align-items: flex-start;
          padding-top: 20px;
        }

        .content {
          flex: 1;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 40px;
          color: var(--primary-color);
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 20px;
        }

        .map-container {
            width: 100%;
            height: 400px;
            background: #f1f5f9;
            margin-bottom: 40px;
            border-radius: var(--radius-lg);
            overflow: hidden;
            border: 1px solid var(--border-color);
        }

        .map-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            font-weight: 500;
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .info-card {
            background: white;
            padding: 30px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-sm);
        }

        .info-card h4 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid var(--text-primary);
        }

        .info-content p {
            margin-bottom: 12px;
            color: var(--text-secondary);
            line-height: 1.6;
        }
        
        .info-content strong {
            color: var(--text-primary);
            margin-right: 8px;
        }

        @media (max-width: 900px) {
          .layout-with-sidebar {
            flex-direction: column;
            gap: 30px;
          }
        }
      `}</style>
    </div>
  );
}
