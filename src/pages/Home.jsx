import { Link } from 'react-router-dom';
import './Home.css';

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
            <Link to="/products/bldc" className="btn btn-primary">
              제품 보기
            </Link>
            <Link to="/contact" className="btn btn-outline">
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
                <Link to="/products/bldc/BL001">더 보기 →</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="card-image">
                <img src="/images/motor.png" alt="BLDC Motor High Speed" />
              </div>
              <div className="product-info">
                <h3>BLDC-500 시리즈</h3>
                <p>정밀 공구를 위한 초고속 모터.</p>
                <Link to="/products/bldc/BL002">더 보기 →</Link>
              </div>
            </div>
            <div className="product-card">
              <div className="card-image">
                <span style={{ fontSize: '40px' }}>🎮</span>
              </div>
              <div className="product-info">
                <h3>스마트 컨트롤러</h3>
                <p>IoT 기능이 통합된 드라이브 컨트롤러.</p>
                <Link to="/products/bldc">더 보기 →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
