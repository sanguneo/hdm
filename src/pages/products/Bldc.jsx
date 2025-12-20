import { Link } from 'react-router-dom';
import './Bldc.css';

export default function BldcList() {
  const products = [
    { id: 'BL001', name: 'BLDC-200 시리즈', desc: '표준형 고토크 모터', specs: '24V / 200W / 3000RPM' },
    { id: 'BL002', name: 'BLDC-500 시리즈', desc: '고속 정밀 모터', specs: '48V / 500W / 5000RPM' },
    { id: 'BL003', name: 'BLDC-1000 시리즈', desc: '산업용 고출력 모터', specs: '48V / 1kW / 2500RPM' },
    { id: 'BL004', name: 'Micro-BLDC', desc: '의료기기용 초소형 모터', specs: '12V / 50W / 10000RPM' },
  ];

  return (
    <div className="section container">
      <div className="page-header">
        <h2 className="title">BLDC 모터</h2>
        <p className="description">다양한 어플리케이션을 위한 고효율, 저소음, 긴 수명의 BLDC 모터.</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/products/bldc/${product.id}`} key={product.id} className="product-card">
            <div className="card-image">
              <img src="/images/motor.png" alt={product.name} />
            </div>
            <div className="card-body">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <div className="product-specs">
                <span>{product.specs}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
