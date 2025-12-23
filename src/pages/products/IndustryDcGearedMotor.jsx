import { Link } from 'react-router-dom';
import { industryDcProducts } from '../../data/industryDcProducts';
import SEO from '../../components/SEO';

export default function IndustryDcGearedMotor() {
  const products = industryDcProducts;

  return (
    <div className="">
      <SEO
        title="산업용 DC Geared Motor"
        description="고성능 산업용 DC 기어드 모터 제품 목록. 다양한 사이즈와 사양을 확인하세요."
        url="/products/industry-dc"
      />
      <div className="page-header">
        <h2 className="title">산업용 DC Geared Motor</h2>
        <p className="description">
          다양한 산업 현장에서 사용되는 고성능 DC 기어드 모터입니다.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/products/industry-dc/${product.id}`} key={product.id} className="product-card">
            <div className="card-image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="card-body">
              <h3 className="product-name">{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
