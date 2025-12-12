import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-section">
          <div className="footer-logo-container">
            <Image src="/arez-logo.png" alt="AREZ REAL ESTATE Logo" width={200} height={80} className="footer-logo-image" />
            <div className="footer-logo">AREZ REAL ESTATE</div>
          </div>
          <p className="footer-text">
            Helping you find your next home with confidence and clarity.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <p className="footer-social">
            <strong>Follow us:</strong>
            <br />
            Instagram: <a href="https://www.instagram.com/arez_realestate" target="_blank" rel="noopener noreferrer">@arez_realestate</a>
            <br />
            TikTok: <a href="https://www.tiktok.com/@arez.realestate" target="_blank" rel="noopener noreferrer">@arez.realestate</a>
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        © {new Date().getFullYear()} Arez Real Estate. All rights reserved.
      </div>
    </footer>
  );
}