'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <span className="fw-bold">Neato</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Centered navigation links */}
          <div className="d-flex justify-content-center flex-grow-1">
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <Link 
                  href="/" 
                  className={`nav-link text-dark ${pathname === '/' ? 'active fw-bold' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link 
                  href="/" 
                  className={`nav-link text-dark ${pathname === '/' ? 'active fw-bold' : ''}`}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link 
                  href="/" 
                  className={`nav-link text-dark ${pathname === '/' ? 'active fw-bold' : ''}`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Download button */}
          <button className="btn btn-primary" style={{ 
            backgroundColor: '#F06513', 
            borderColor: '#F06513', 
            width: '150px', 
            borderRadius: '30px', 
            height: '50px',
            marginLeft: '-60px'
          }}>
            Download app
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;