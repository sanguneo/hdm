'use client';
import Sidebar from '@/app/components/Sidebar';

export default function History() {
  const sidebarItems = [
    { label: '인사말', href: '/company/greeting', active: false },
    { label: '연혁', href: '/company/history', active: true },
    { label: '오시는길', href: '/company/location', active: false },
  ];

  const historyEvents = [
    { year: '2024', events: ['글로벌 강소기업 선정', '제2공장 증축 완료'] },
    { year: '2023', events: ['ISO 9001/14001 인증 획득', '수출 1000만불 달성'] },
    { year: '2022', events: ['BLDC 모터 자동화 라인 구축', '기업부설연구소 설립'] },
    { year: '2020', events: ['(주)현대모터스 법인 설립', '벤처기업 인증'] },
  ];

  return (
    <div className="section container layout-with-sidebar">
      <Sidebar title="회사소개" items={sidebarItems} />
      <div className="content">
        <h3 className="page-title">연혁</h3>
        
        <div className="timeline">
          {historyEvents.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-year">{item.year}</div>
              <ul className="timeline-events">
                {item.events.map((event, i) => (
                  <li key={i}>{event}</li>
                ))}
              </ul>
            </div>
          ))}
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

        .timeline {
          padding-left: 20px;
          border-left: 2px solid var(--border-color);
          margin-left: 10px;
        }

        .timeline-item {
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-point {
          position: absolute;
          left: -27px;
          top: 6px;
          width: 12px;
          height: 12px;
          background: white;
          border: 3px solid var(--accent-color);
          borderRadius: 50%;
          z-index: 10;
        }

        .timeline-year {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent-color);
          margin-bottom: 16px;
          line-height: 1;
        }

        .timeline-events {
            list-style: none;
        }

        .timeline-events li {
            margin-bottom: 12px;
            font-size: 1.1rem;
            color: var(--text-secondary);
            position: relative;
            padding-left: 20px;
        }
        
        .timeline-events li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 10px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: var(--text-secondary);
            opacity: 0.5;
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
