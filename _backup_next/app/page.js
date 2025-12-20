'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            정밀 모터 기술의 <br />
            <span className="text-gradient">미래를 선도합니다</span>
          </h1>
          <p className="hero-subtitle">
            현대모터스는 로봇, 자동화 및 산업용 애플리케이션을 위한 고성능 BLDC 모터를 전문으로 합니다. 
            혁신의 힘을 경험하십시오.
          </p>
          <div className="hero-actions">
            <Link href="/products/bldc" className="btn btn-primary">
              제품 보기
            </Link>
            <Link href="/contact" className="btn btn-outline">
              문의하기
            </Link>
          </div>
        </div>
        <div className="hero-bg"></div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div className="section-header">
            <h2>왜 현대모터스인가요?</h2>
            <p>탁월한 품질과 기술적 우수성으로 업계를 선도합니다.</p>
          </div>
          
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">🚀</div>
              <h3>고효율</h3>
              <p>에너지 효율과 성능을 극대화하기 위한 최적의 자기 회로 설계.</p>
            </div>
            <div className="feature-card">
              <div className="icon">⚡</div>
              <h3>정밀 제어</h3>
              <p>원활한 제조 및 로봇 공학 작동을 위한 고급 제어 로직.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🛡️</div>
              <h3>신뢰성</h3>
              <p>가혹한 환경에서도 긴 수명을 보장하는 엄격한 품질 테스트.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>주력 제품</h2>
            <p>다양한 맞춤형 모터 솔루션을 살펴보세요.</p>
          </div>

          <div className="product-showcase">
             <div className="product-card">
                <div className="card-image">
                   <img src="/images/motor.png" alt="BLDC Motor" />
                </div>
                <div className="product-info">
                    <h3>BLDC-200 시리즈</h3>
                    <p>고토크, 저소음 표준 모델.</p>
                    <Link href="/products/bldc/BL001">더 보기 →</Link>
                </div>
             </div>
             <div className="product-card">
                <div className="card-image">
                   <img src="/images/motor.png" alt="BLDC Motor High Speed" />
                </div>
                <div className="product-info">
                    <h3>BLDC-500 시리즈</h3>
                    <p>정밀 공구를 위한 초고속 모터.</p>
                    <Link href="/products/bldc/BL002">더 보기 →</Link>
                </div>
             </div>
             <div className="product-card">
                <div className="card-image">
                  <span style={{ fontSize: '40px' }}>🎮</span>
                </div>
                <div className="product-info">
                    <h3>스마트 컨트롤러</h3>
                    <p>IoT 기능이 통합된 드라이브 컨트롤러.</p>
                    <Link href="/products/bldc">더 보기 →</Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero Styles */
        .hero {
          position: relative;
          height: 90vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at top right, #f1f5f9, #ffffff);
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(37, 99, 235, 0) 100%);
          clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
        }

        /* Section Commons */
        .bg-light {
          background-color: #f8fafc;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--primary-color);
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        /* Feature Grid */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .feature-card {
          padding: 40px;
          border-radius: var(--radius-lg);
          background: white;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1px solid var(--border-color);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .icon {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .feature-card p {
          color: var(--text-secondary);
        }

        /* Product Showcase */
        .product-showcase {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .product-card {
            background: white;
            border-radius: var(--radius-md);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
             border: 1px solid var(--border-color);
        }

        .product-card:hover {
             transform: translateY(-5px);
             box-shadow: var(--shadow-md);
        }

        .card-image {
            height: 200px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid var(--border-color);
            padding: 20px;
        }

        .card-image img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        .product-info {
            padding: 24px;
        }

        .product-info h3 {
            font-size: 1.25rem;
            margin-bottom: 8px;
        }

        .product-info p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-bottom: 16px;
        }

        .product-info a {
            color: var(--accent-color);
            font-weight: 600;
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-bg {
            width: 100%;
            height: 50%;
            bottom: 0;
            top: auto;
            clip-path: none;
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}
