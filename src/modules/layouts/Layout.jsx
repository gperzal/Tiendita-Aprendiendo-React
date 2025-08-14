import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { FaArrowAltCircleUp } from "react-icons/fa";

export function Container({ children, fluid = false, className = '' }) {
  return (
    <div 
      className={`${fluid ? 'container-fluid' : 'container'} py-4 ${className}`} 
      id="content"
    >
      {children}
    </div>
  );
}

export default function Layout() {
  return (
    <>


      <div className="d-flex flex-column min-vh-100">
        {/* Navbar con posición sticky mejorada */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow-1 position-relative">
          {/* Background decorative elements */}
          <div 
            className="position-absolute top-0 start-0 w-100 h-100 opacity-50"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(102, 126, 234, 0.1) 0%, transparent 50%)',
              pointerEvents: 'none',
              zIndex: -1
            }}
          />
          
          {/* Content wrapper with enhanced spacing */}
          <div className="content-wrapper fade-in-up">
            <Container>
              <Outlet />
            </Container>
          </div>
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Scroll to top button global */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="btn btn-primary rounded-circle shadow-lg position-fixed bottom-0 end-0 m-4 d-flex align-items-center justify-content-center"
          style={{ width: '50px', height: '50px', zIndex: 1050, padding: 0 }}
          title="Volver arriba"
        >
          <FaArrowAltCircleUp style={{ color: 'white', fontSize: '130px' }} />
        </button>
      </div>
    </>
  );
}

// Enhanced Container variations for different page types
export function HeroContainer({ children, className = '' }) {
  return (
    <div className={`container-fluid px-0 ${className}`}>
      {children}
    </div>
  );
}

export function CenteredContainer({ children, maxWidth = '800px', className = '' }) {
  return (
    <div className={`container py-5 ${className}`}>
      <div className="row justify-content-center">
        <div className="col-12" style={{ maxWidth }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function GridContainer({ children, className = '' }) {
  return (
    <div className={`container py-4 ${className}`}>
      <div className="row g-4">
        {children}
      </div>
    </div>
  );
}