import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Admin', href: '/admin' },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="nav">
      <div className="nav-inner-full">
        <div className="nav-logo-container">
          <Link href="/" className="nav-logo">
            <img 
              src="/logo.png" 
              alt="AREZ REAL ESTATE Logo" 
              width="150" 
              height="60" 
              className="nav-logo-image"
            />
          </Link>
        </div>
        <nav className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                'nav-link' +
                (router.pathname === link.href ? ' nav-link-active' : '')
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}