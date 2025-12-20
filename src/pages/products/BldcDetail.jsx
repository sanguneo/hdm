import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './BldcDetail.css';

export default function ProductDetail() {
  const { id } = useParams();

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
    </div>
  );
}
