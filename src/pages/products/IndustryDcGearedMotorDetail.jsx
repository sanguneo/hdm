import { useParams, Link } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa6';
import { SiAutodesk } from 'react-icons/si';
import { industryDcProducts } from '../../data/industryDcProducts';
import SEO from '../../components/SEO';

export default function IndustryDcGearedMotorDetail() {
  const { id } = useParams();
  const product = industryDcProducts.find((p) => p.id === parseInt(id));

  // Breadcrumb Component removed (using global)

  if (!product) {
    return (
      <div className="product-detail-container">
        {/* Top Breadcrumb removed */}
        <div className="not-found">
          <h2>제품을 찾을 수 없습니다.</h2>
          <Link to="/products/industry-dc" className="btn btn-outline">
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      {/* SEO Metadata */}
      <SEO
        title={product.name}
        description={product.description}
        image={product.img}
        url={`/products/industry-dc/${product.id}`}
      />

      <div className="navigation-area" style={{ marginBottom: '20px', paddingTop: '20px' }}>
        <Link to="/products/industry-dc" className="btn-back">
          ◀ 목록으로
        </Link>
      </div>

      <h4 className="description-title">제품정보</h4>
      <div className="detail-content-wrapper refined-layout">

        <div className="detail-image-section">
          <div className="image-frame refined-frame">
            <img src={product.img} alt={product.name} className="detail-image" />
          </div>
        </div>

        <div className="detail-info-section">
          <span className="product-category">산업용 DC Geared Motor</span>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>



          <div className="download-area">
            <h4 className="download-title">자료 다운로드</h4>
            <div className="download-buttons">
              <a href={product.pdf} download className="btn-download-minimal pdf">
                <FaFilePdf className="icon" /> PDF
              </a>
              <a href={product.dwg} download className="btn-download-minimal dwg">
                <SiAutodesk className="icon" /> DWG
              </a>
            </div>
          </div>
        </div>
        <div className="detail-description">
          <h4 className="description-title">제품설명</h4>
          {/* Detail Images (Specs/Drawings) */}
          {product.detailImages && product.detailImages.length > 0 && (
            <div className="product-detail-images">
              {product.detailImages.map((img, index) => (
                <img key={index} src={img} alt={`${product.name} detail ${index + 1}`} className="spec-image" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
