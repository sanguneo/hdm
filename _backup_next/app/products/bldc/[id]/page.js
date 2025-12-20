'use client';
import Sidebar from '@/app/components/Sidebar';

export default async function ProductDetail({ params }) {
  const { id } = await params;
  
  const sidebarItems = [
    { label: 'BLDC 모터', href: '/products/bldc', active: true },
    { label: 'BLDC 기어 모터', href: '#' },
    { label: 'DC 모터', href: '#' },
    { label: 'DC 기어 모터', href: '#' },
  ];

  return (
    <div className="section container layout-with-sidebar">
      <Sidebar title="제품소개" items={sidebarItems} />
      <div className="content">
         <h3 className="page-title">BLDC 모터</h3>
         
         <div className="product-detail-container">
            <div className="detail-image-box">
                <img src="/images/motor.png" alt="Product Detail" className="detail-image" />
            </div>
            <div className="detail-info">
                <h4 className="product-title">BLDC-Series-{id}</h4>
                <p className="product-desc">
                  현대모터스의 고성능 BLDC 모터 시리즈는 탁월한 내구성과 효율성을 제공합니다. 
                  로봇, 자동화 장비 및 의료 기기에 적합합니다.
                </p>
                <div className="table-container">
                    <table className="spec-table">
                        <tbody>
                            <tr>
                                <th>정격 전압</th>
                                <td>24V / 48V</td>
                            </tr>
                            <tr>
                                <th>정격 출력</th>
                                <td>200W ~ 400W</td>
                            </tr>
                             <tr>
                                <th>정격 속도</th>
                                <td>3000 RPM</td>
                            </tr>
                             <tr>
                                <th>토크</th>
                                <td>1.27 Nm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
         </div>

         {/* Technical Tabs or Sections */}
         <div className="tech-section">
            <h5 className="tech-title">외형도 (Dimensions)</h5>
            <div className="tech-content">
                <img src="/images/dimension.png" alt="Dimensions" />
            </div>
         </div>

         <div className="tech-section">
            <h5 className="tech-title">성능 곡선 (Performance Curve)</h5>
            <div className="tech-content">
                <img src="/images/performance.png" alt="Performance Curve" />
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

        .product-detail-container {
            display: flex;
            gap: 40px;
            margin-bottom: 60px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 40px;
        }

        .detail-image-box {
            width: 400px;
            flex-shrink: 0;
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            padding: 20px;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .detail-image {
            width: 100%;
            height: auto;
            display: block;
        }

        .product-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 16px;
            color: var(--primary-color);
        }

        .product-desc {
            margin-bottom: 24px;
            color: var(--text-secondary);
            line-height: 1.6;
        }

        .table-container {
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            overflow: hidden;
        }

        .spec-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
        }

        .spec-table th, 
        .spec-table td {
            padding: 12px 16px;
            border-bottom: 1px solid var(--border-color);
            text-align: left;
        }

        .spec-table tr:last-child th,
        .spec-table tr:last-child td {
            border-bottom: none;
        }

        .spec-table th {
            width: 150px;
            background: #f8fafc;
            font-weight: 600;
            color: var(--text-primary);
        }

        .spec-table td {
            color: var(--text-secondary);
        }

        .tech-section {
            margin-bottom: 50px;
        }

        .tech-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 20px;
            border-left: 4px solid var(--accent-color);
            padding-left: 16px;
            color: var(--text-primary);
        }

        .tech-content {
            padding: 40px;
            background: #ffffff;
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .tech-content img {
            max-width: 100%;
            height: auto;
        }

        @media (max-width: 900px) {
          .layout-with-sidebar {
            flex-direction: column;
            gap: 30px;
          }

          .product-detail-container {
              flex-direction: column;
          }

          .detail-image-box {
              width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
