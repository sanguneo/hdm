import './Production.css';

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
    </div>
  );
}
