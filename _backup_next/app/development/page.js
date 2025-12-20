'use client';
export default function DevelopmentProcess() {
  const phases = [
    { title: '기획 및 분석', items: ['시장 조사', '고객 요구사항 분석', '기술 타당성 검토'] },
    { title: '설계', items: ['기구 설계 (2D/3D)', '회로 설계', '소프트웨어 설계'] },
    { title: '시제품 제작', items: ['Sample 제작', '기능 구현', '디자인 검토'] },
    { title: '검증 및 시험', items: ['성능 테스트', '신뢰성 시험', '규격 인증'] },
    { title: '양산', items: ['공정 세팅', '양산 승인', '대량 생산'] },
  ];

  return (
    <div className="section container">
      <div className="page-header">
        <h2 className="title">개발 프로세스</h2>
        <p className="description">고객의 니즈를 실현하기 위한 전문적인 연구개발 프로세스입니다.</p>
      </div>

      <div className="timeline-vertical">
        {phases.map((phase, index) => (
          <div key={index} className="phase-row">
            <div className="phase-marker">
                <div className="marker-circle">{index + 1}</div>
                {index !== phases.length - 1 && <div className="marker-line"></div>}
            </div>
            <div className="phase-content">
                <h3 className="phase-title">{phase.title}</h3>
                <div className="tags">
                    {phase.items.map((item, i) => (
                        <span key={i} className="tag">{item}</span>
                    ))}
                </div>
            </div>
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

        .timeline-vertical {
            max-width: 800px;
            margin: 0 auto;
        }

        .phase-row {
            display: flex;
            gap: 40px;
            padding-bottom: 40px;
        }

        .phase-marker {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50px;
            flex-shrink: 0;
        }

        .marker-circle {
            width: 40px;
            height: 40px;
            background: var(--accent-color);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.2rem;
            position: relative;
            z-index: 2;
            box-shadow: 0 0 0 4px rgba(37,99,235,0.2);
        }

        .marker-line {
            flex: 1;
            width: 2px;
            background: #e2e8f0;
            margin-top: 10px;
            min-height: 40px;
        }

        .phase-content {
            flex: 1;
            padding-top: 5px;
        }

        .phase-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 16px;
            color: var(--text-primary);
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .tag {
            background: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.95rem;
            color: var(--text-secondary);
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-sm);
        }
      `}</style>
    </div>
  );
}
