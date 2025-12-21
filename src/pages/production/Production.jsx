import './Production.css';

export default function ProductionProcess() {
  const steps = [
    { number: '01', title: '자재 입고', desc: '엄격한 기준에 따른 원자재 입고 및 검수 과정을 거칩니다.' },
    { number: '02', title: '입고 검사', desc: '자재의 품질 및 규격을 정밀하게 확인하여 불량률을 최소화합니다.' },
    { number: '03', title: '생산 조립', desc: '최첨단 자동화 라인을 통해 정밀하고 효율적인 조립이 이루어집니다.' },
    { number: '04', title: '중간 검사', desc: '공정 단계별로 철저한 품질 확인을 수행하여 오류를 조기에 차단합니다.' },
    { number: '05', title: '최종 검사', desc: '완제품의 성능 및 신뢰성 테스트를 통해 최고의 품질을 보증합니다.' },
    { number: '06', title: '출하', desc: '안전한 포장 과정을 거쳐 고객에게 신속하고 정확하게 배송됩니다.' },
  ];

  return (
    <div className="section container">
      <div className="page-header">
        <h2 className="title">생산 프로세스</h2>
        <p className="description">최고의 품질을 위한 체계적인 생산 관리 시스템을 운영합니다.</p>
      </div>

      <div className="timeline-vertical">
        {steps.map((step, index) => (
          <div key={index} className="phase-row">
            <div className="phase-marker">
              <div className="marker-circle">{step.number}</div>
              {index !== steps.length - 1 && <div className="marker-line"></div>}
            </div>
            <div className="phase-content">
              <h3 className="phase-title">{step.title}</h3>
              <p className="phase-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
