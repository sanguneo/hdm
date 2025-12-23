import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';

import { COMPANY_HISTORY } from '../../constants/history';

export default function History() {
  const sidebarItems = [
    { label: '인사말', href: '/company/greeting', active: false },
    { label: '연혁', href: '/company/history', active: true },
    { label: '오시는길', href: '/company/location', active: false },
  ];

  const historyEvents = COMPANY_HISTORY;

  return (
    <div className="section container layout-with-sidebar">
      <SEO title="연혁" description="현대모터스의 발자취와 성장 과정." url="/company/history" />
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
