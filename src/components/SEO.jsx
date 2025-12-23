import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, url }) {
  const siteTitle = '현대모터스 - 정밀 모터 솔루션';
  const displayTitle = title ? `${title} | 현대모터스` : siteTitle;
  const siteDescription = '산업용 DC 기어드 모터, BLDC, 펌프 및 온열매트용 모터 전문 생산업체. 30년 전통의 기술력.';
  const displayDesc = description || siteDescription;
  const siteUrl = 'http://hyundaemotors.co.kr'; // Or the actual domain
  const displayUrl = url ? `${siteUrl}${url}` : siteUrl;
  const displayImage = image ? `${siteUrl}${image}` : `${siteUrl}/images/logo.png`; // Fallback image

  return (
    <Helmet defer={false}>
      {/* Basic Metadata */}
      <title>{displayTitle}</title>
      <meta name="description" content={displayDesc} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={displayUrl} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={displayDesc} />
      <meta property="og:image" content={displayImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={displayUrl} />
      <meta property="twitter:title" content={displayTitle} />
      <meta property="twitter:description" content={displayDesc} />
      <meta property="twitter:image" content={displayImage} />

      <link rel="canonical" href={displayUrl} />

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}
