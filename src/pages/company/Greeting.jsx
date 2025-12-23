import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';

export default function Greeting() {
  const sidebarItems = [
    { label: '인사말', href: '/company/greeting', active: true },
    { label: '연혁', href: '/company/history', active: false },
    { label: '오시는길', href: '/company/location', active: false },
  ];

  return (
    <div className="section container layout-with-sidebar">
      <SEO title="인사말" description="현대모터스 대표이사 인사말. 최고의 품질과 서비스로 보답하겠습니다." url="/company/greeting" />
      <Sidebar title="회사소개" items={sidebarItems} />
      <div className="content">
        <h3 className="page-title">인사말</h3>

        <div className="greeting-container">
          <div className="greeting-header">
            <span className="text-orange">항상 고객과 함께 하는</span> <span className="text-blue">'현대모터스'</span> 가 되겠습니다..
          </div>

          <div className="greeting-body">
            <p>
              현대모터스는 모터 생산 및 판매 기업으로 양질의 인력으로 구성된 체계적인 연구개발,<br />
              철저한 품질관리, 신속한 사후처리를 통해 모터 생산업 현장의 선두에서 선구자의 역할을 하고자 합니다.
            </p>

            <h4 className="greeting-subtitle">최고의 품질, 최고의 서비스 !!</h4>

            <p>
              현대 모터스는 현재의 위치에 만족하지 않고 늘 도전하는 자세로 고객여러분의 요구사항에 따라 계속 변화하며<br />
              창의적인 기업을 일구어냄으로써 고객의 만족과 지속적인 신뢰를 획득하여 고객이 믿고 맡길 수 있는<br />
              전문기업이 되고자 합니다.
            </p>

            <div className="greeting-footer-msg">
              <p>여러분의 끊임없는 관심과 지도편달을 부탁드립니다.</p>
              <p>감사합니다.</p>
            </div>

            <div className="greeting-signature">
              대표 오경교 배상
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
