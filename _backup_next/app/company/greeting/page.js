'use client';
import Sidebar from '@/app/components/Sidebar';

export default function Greeting() {
  const sidebarItems = [
    { label: '인사말', href: '/company/greeting', active: true },
    { label: '연혁', href: '/company/history', active: false },
    { label: '오시는길', href: '/company/location', active: false },
  ];

  return (
    <div className="section container layout-with-sidebar">
      <Sidebar title="회사소개" items={sidebarItems} />
      <div className="content">
        <h3 className="page-title">인사말</h3>
        
        <div className="greeting-content">
          <h4 className="subtitle">Technology for the Future</h4>
          <p>
            안녕하십니까? <strong>현대모터스</strong> 홈페이지를 찾아주신 여러분을 진심으로 환영합니다.<br/>
            저희 현대모터스는 끊임없는 기술 개발과 혁신을 통해 모터 산업의 선두주자로 발돋움하고 있습니다.
          </p>
          <p>
            4차 산업혁명 시대를 맞아 로봇, 자동화, 정밀 제어 분야의 핵심 부품인 고성능 BLDC 모터의 수요가 급증하고 있습니다.
            이에 저희는 차별화된 기술력과 품질 관리로 고객의 요구에 부합하는 최고의 솔루션을 제공하고자 합니다.
          </p>
          <p>
            고객 여러분의 성원에 보답하기 위해 최고의 품질과 서비스로 다가가겠습니다.<br/>
            감사합니다.
          </p>
          <br/><br/>
          <div className="signature">
             <p>현대모터스 대표 <strong>오 경 교</strong></p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .layout-with-sidebar {
          display: flex;
          gap: 80px;
          align-items: flex-start;
          padding-top: 20px;
        }

        .content {
          flex: 1;
        }

        .page-title {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 40px;
          color: var(--primary-color);
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 20px;
        }

        .subtitle {
          font-size: 1.5rem;
          margin-bottom: 24px;
          color: var(--accent-color);
          font-weight: 700;
        }

        .greeting-content {
          line-height: 2;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .greeting-content strong {
            color: var(--text-primary);
        }

        .signature {
          text-align: right;
          font-size: 1.25rem;
        }

        @media (max-width: 900px) {
          .layout-with-sidebar {
            flex-direction: column;
            gap: 30px;
          }
        }
      `}</style>
    </div>
  );
}
