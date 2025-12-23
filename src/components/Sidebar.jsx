import { Link } from 'react-router-dom';

export default function Sidebar({ title, items }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>{title}</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={`sidebar-link ${item.active ? 'active' : ''}`}
              >
                {item.label}
                <span className="arrow">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
