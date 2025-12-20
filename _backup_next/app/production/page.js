'use client';
export default function ProductionProcess() {
  const steps = [
    { number: '01', title: '자재 입고', desc: '엄격한 기준에 따른 원자재 입고' },
    { number: '02', title: '입고 검사', desc: '자재 품질 및 규격 확인' },
    { number: '03', title: '생산 조립', desc: '자동화 라인을 통한 정밀 조립' },
    { number: '04', title: '중간 검사', desc: '공정 단계별 품질 확인' },
    { number: '05', title: '최종 검사', desc: '완제품 성능 및 신뢰성 테스트' },
    { number: '06', title: '출하', desc: '안전한 포장 및 고객 배송' },
  ];

  return (
    <div className="section container">
      <div className="page-header">
        <h2 className="title">생산 프로세스</h2>
        <p className="description">최고의 품질을 위한 체계적인 생산 관리 시스템을 운영합니다.</p>
      </div>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div key={index} className="process-card">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
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

        .process-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .process-card {
            background: white;
            padding: 40px 30px;
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-color);
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s;
        }

        .process-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
        }

        .step-number {
            font-size: 4rem;
            font-weight: 900;
            color: var(--accent-color);
            opacity: 0.1;
            position: absolute;
            top: 20px;
            right: 20px;
            line-height: 1;
        }

        .step-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 16px;
            position: relative;
        }

        .step-desc {
            color: var(--text-secondary);
            line-height: 1.6;
            position: relative;
        }
      `}</style>
    </div>
  );
}
