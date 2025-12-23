import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function ProductLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  const sidebarItems = [
    // {
    //   label: 'BLDC 모터',
    //   href: '/products/bldc',
    //   active: pathname.startsWith('/products/bldc')
    // },
    {
      label: '산업용 DC Geared Motor',
      href: '/products/industry-dc',
      active: pathname.startsWith('/products/industry-dc')
    },
    // {
    //   label: 'DC Geared Motor',
    //   href: '/products/dc-geared',
    //   active: pathname === '/products/dc-geared'
    // },
  ];

  return (
    <div className="product-layout container">
      <Sidebar title="제품소개" items={sidebarItems} />
      <div className="product-content">
        <Outlet />
      </div>
    </div>
  );
}
