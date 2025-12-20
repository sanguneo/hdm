import './Development.css';

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
    </div>
  );
}
