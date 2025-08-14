import { useEffect, useState } from 'react';

export default function AlertBox({ 
  show = false, 
  variant = 'success', 
  message = '', 
  onClose, 
  autoClose = true,
  duration = 4000,
  position = 'bottom-end' // 'bottom-end', 'bottom-center', 'top-end', 'top-center'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      // Small delay for smooth entrance animation
      setTimeout(() => setIsAnimating(true), 10);
      
      // Auto close functionality
      if (autoClose && duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, duration);
        
        return () => clearTimeout(timer);
      }
    } else {
      handleClose();
    }
  }, [show, autoClose, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300); // Wait for animation to complete
  };

  if (!isVisible) return null;

  // Position classes
  const getPositionClasses = () => {
    const baseClasses = "position-fixed";
    const zIndex = { zIndex: 1080 };
    
    switch (position) {
      case 'bottom-end':
        return { 
          classes: `${baseClasses} bottom-0 end-0 m-3`, 
          style: zIndex 
        };
      case 'bottom-center':
        return { 
          classes: `${baseClasses} bottom-0 start-50 translate-middle-x mb-3`, 
          style: zIndex 
        };
      case 'top-end':
        return { 
          classes: `${baseClasses} top-0 end-0 m-3`, 
          style: zIndex 
        };
      case 'top-center':
        return { 
          classes: `${baseClasses} top-0 start-50 translate-middle-x mt-3`, 
          style: zIndex 
        };
      default:
        return { 
          classes: `${baseClasses} bottom-0 end-0 m-3`, 
          style: zIndex 
        };
    }
  };

  const { classes: positionClasses, style: positionStyle } = getPositionClasses();

  // Variant icons and colors
  const getVariantConfig = () => {
    switch (variant) {
      case 'success':
        return {
          icon: 'fas fa-check-circle',
          bgClass: 'bg-success',
          textClass: 'text-white',
          title: '¡Éxito!'
        };
      case 'danger':
        return {
          icon: 'fas fa-exclamation-triangle',
          bgClass: 'bg-danger',
          textClass: 'text-white',
          title: 'Error'
        };
      case 'warning':
        return {
          icon: 'fas fa-exclamation-circle',
          bgClass: 'bg-warning',
          textClass: 'text-dark',
          title: 'Advertencia'
        };
      case 'info':
        return {
          icon: 'fas fa-info-circle',
          bgClass: 'bg-info',
          textClass: 'text-white',
          title: 'Información'
        };
      default:
        return {
          icon: 'fas fa-bell',
          bgClass: 'bg-primary',
          textClass: 'text-white',
          title: 'Notificación'
        };
    }
  };

  const { icon, bgClass, textClass, title } = getVariantConfig();

  // Animation styles
  const animationClasses = isAnimating 
    ? 'opacity-100' 
    : 'opacity-0';

  const transformClasses = isAnimating
    ? 'translate-x-0'
    : position.includes('end') ? 'translate-x-100' : 'translate-x-0 scale-50';

  return (
    <div 
      className={`${positionClasses} ${animationClasses} ${transformClasses}`}
      style={{
        ...positionStyle,
        transition: 'all 0.3s ease-in-out',
        transform: `${positionStyle.transform || ''} ${!isAnimating && position.includes('end') ? 'translateX(100%)' : ''}`,
        minWidth: '300px',
        maxWidth: '400px'
      }}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      {/* Toast Container */}
      <div className={`toast show ${bgClass} border-0 shadow-lg`} role="alert">
        <div className={`toast-header ${bgClass} ${textClass} border-0`}>
          <i className={`${icon} me-2`}></i>
          <strong className="me-auto">{title}</strong>
          <small className="opacity-75">ahora</small>
          <button 
            type="button" 
            className={`btn-close ${variant === 'warning' ? 'btn-close-white' : 'btn-close-white'} ms-2`}
            onClick={handleClose}
            aria-label="Cerrar notificación"
          ></button>
        </div>
        
        <div className={`toast-body ${bgClass} ${textClass} border-0`}>
          <div className="d-flex align-items-start">
            <div className="flex-grow-1">
              <p className="mb-0 fw-medium">{message}</p>
            </div>
          </div>
          
          {/* Progress bar for auto-close */}
          {autoClose && duration > 0 && (
            <div className="mt-2">
              <div className="progress bg-white bg-opacity-25" style={{ height: '2px' }}>
                <div 
                  className="progress-bar bg-white"
                  style={{
                    width: '100%',
                    animation: `shrink ${duration}ms linear forwards`
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animation for progress bar */}
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}