import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div id="heroCarousel" className="carousel slide hero-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="hero-slide" style={{
              background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200") center/cover'
            }}>
              <div className="container">
                <div className="hero-content">
                  <h1>Productos Premium para tu Mascota</h1>
                  <p>Descubre nuestra selección especial de productos de calidad premium para el bienestar de tu amigo peludo</p>
                  <button className="btn btn-primary-custom btn-lg">
                    Explorar Productos
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="hero-slide" style={{
              background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1200") center/cover'
            }}>
              <div className="container">
                <div className="hero-content">
                  <h1>Alimentación Saludable</h1>
                  <p>Los mejores alimentos naturales y nutritivos para mantener a tu mascota sana y feliz</p>
                  <button className="btn btn-primary-custom btn-lg">
                    Ver Alimentos
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="hero-slide" style={{
              background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1200") center/cover'
            }}>
              <div className="container">
                <div className="hero-content">
                  <h1>Accesorios de Calidad</h1>
                  <p>Encuentra los mejores accesorios y juguetes para el entretenimiento y comodidad de tu mascota</p>
                  <button className="btn btn-primary-custom btn-lg">
                    Ver Accesorios
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  )
}

export default HeroSection