import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: '현대모터스 - 글로벌 모터 기술 리더',
  description: '현대모터스 홈페이지',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
