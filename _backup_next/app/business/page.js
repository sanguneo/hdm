export default function Business() {
  return (
    <div className="section container">
      <h2 style={{ fontSize: '32px', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}>적용분야</h2>
      <p style={{ textAlign: 'center', marginBottom: '60px', color: '#666' }}>
        현대모터스의 모터 기술은 다양한 산업 분야에서 핵심 동력으로 사용되고 있습니다.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{ 
            height: '100px', 
            border: '1px solid #eee', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: '8px',
            background: '#fff',
            fontWeight: 'bold',
            color: '#ccc',
            fontSize: '18px'
          }}>
            PARTNER {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
