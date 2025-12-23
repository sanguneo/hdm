import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="현대모터스에 오신 것을 환영합니다"
        description="현대모터스는 모터 생산 및 판매 기업으로 양질의 인력으로 구성된 체계적인 연구개발, 철저한 품질관리, 신속한 사후처리를 통해 모터 생산업 현장의 선두에서 선구자의 역할을 하고자 합니다."
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            정밀함으로 구동되는 <br />
            <span className="text-gradient">혁신적인 모터 솔루션</span>
          </h1>
          <p className="hero-subtitle">
            현대모터스는 산업용 DC모터에 대한<br />
            최상의 성능과 내구성을 갖춘 맞춤형 솔루션을 제공합니다.
          </p>
          <div className="hero-actions">
            <Link to="/products/industry-dc" className="btn btn-primary">
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
            <p>탁월한 품질과 독보적인 기술력으로 산업 현장의 혁신을 지원합니다.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">🚀</div>
              <h3>고효율 퍼포먼스</h3>
              <p>에너지 효율 극대화 및 최적의 자기 회로 설계로 강력한 출력을 보장합니다.</p>
            </div>
            <div className="feature-card">
              <div className="icon">⚡</div>
              <h3>정밀한 제어</h3>
              <p>스마트 팩토리 및 정밀 로봇 구동을 위한 최적의 제어 솔루션을 제공합니다.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🛡️</div>
              <h3>극한의 내구성</h3>
              <p>가혹한 산업 환경에서도 변함없는 성능을 유지하는 엄격한 품질 테스트를 거칩니다.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
