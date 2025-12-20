import Sidebar from '../../components/Sidebar';
import './History.css';

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
    </div>
  );
}
