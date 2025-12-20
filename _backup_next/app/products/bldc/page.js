'use client';
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
          <a href={`/products/bldc/${product.id}`} key={product.id} className="product-card">
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
          </a>
        ))}
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

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
        }

        .product-card {
            background: white;
            border-radius: var(--radius-md);
            overflow: hidden;
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
            display: block;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-color);
        }

        .card-image {
            height: 220px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            border-bottom: 1px solid var(--border-color);
        }

        .card-image img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        .card-body {
            padding: 24px;
        }

        .product-name {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 8px;
            color: var(--text-primary);
        }

        .product-desc {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-bottom: 16px;
            line-height: 1.5;
        }

        .product-specs {
            display: inline-block;
            background: rgba(37, 99, 235, 0.1);
            color: var(--accent-color);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
        }
      `}</style>
    </div>
  );
}
