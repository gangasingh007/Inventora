import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, Users, Shield, Truck, ArrowRight, Menu, X, Heart, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      content: "Inventora has transformed my shopping experience. The quality and service are unmatched!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Tech Enthusiast",
      content: "Found the perfect gadgets at amazing prices. Fast shipping and excellent customer support.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Lifestyle Influencer",
      content: "The curated collection is incredible. Every purchase has exceeded my expectations.",
      rating: 5
    }
  ];

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    //   background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#ffffff',
      minHeight: '100vh',
      overflowX: 'hidden'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      background: "none",
      backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
      zIndex: 1000,
      padding: '1rem 0',
      transition: 'all 0.3s ease'
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    logo: {
      fontSize: '2rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      position: 'relative'
    },
    navIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    iconButton: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      position: 'relative'
    },
    cartBadge: {
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      background: '#8b5cf6',
      color: '#ffffff',
      fontSize: '0.75rem',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mobileMenu: {
      display: isMenuOpen ? 'block' : 'none',
      background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '1rem'
    },
    hero: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      textAlign: 'center'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    //   background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
      zIndex: 1
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      padding: '0 2rem',
      maxWidth: '1000px'
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(45deg, #ffffff, #e2e8f0, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
      color: '#cbd5e1',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '3rem'
    },
    primaryButton: {
      background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
      color: '#ffffff',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    secondaryButton: {
      background: 'transparent',
      color: '#ffffff',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      padding: '1rem 2rem',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    features: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
      fontSize: '0.9rem',
      color: '#9ca3af'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    section: {
      padding: '5rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1rem',
      background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    sectionSubtitle: {
      fontSize: '1.2rem',
      textAlign: 'center',
      color: '#cbd5e1',
      marginBottom: '3rem',
      maxWidth: '600px',
      margin: '0 auto 3rem'
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    productCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    productImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '0.5rem',
      marginBottom: '1rem'
    },
    productRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      marginBottom: '0.5rem'
    },
    productName: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '0.5rem'
    },
    productPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#8b5cf6',
      marginBottom: '1rem'
    },
    addToCartButton: {
      background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
      color: '#ffffff',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.3s ease'
    },
    testimonialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    testimonialCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center'
    },
    testimonialContent: {
      fontSize: '1.1rem',
      fontStyle: 'italic',
      marginBottom: '1rem',
      color: '#e2e8f0'
    },
    testimonialName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '0.25rem'
    },
    testimonialRole: {
      fontSize: '0.9rem',
      color: '#9ca3af'
    },
    footer: {
      background: 'rgba(0, 0, 0, 0.5)',
      padding: '3rem 2rem 1rem',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    },
    footerLink: {
      color: '#cbd5e1',
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    },
    copyright: {
      color: '#9ca3af',
      fontSize: '0.9rem',
      paddingTop: '1rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }
  };

  return (
    <div style={styles.body}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            Inventora
          </div>
        </div>
        
        {/* Mobile Menu */}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Premium Shopping<br />
            <span style={{ fontSize: '3rem' }}>Redefined</span>
          </h1>
          
          <p style={styles.heroSubtitle}>
            Discover curated collections of premium products with unmatched quality and style. 
            Your gateway to exclusive shopping experiences and Eco Friendly Deliveries.
          </p>
          
          <div style={styles.buttonContainer}>
            <button 
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
             onClick={()=>{navigate("/register")}}
            >
              Get Started
              <ArrowRight size={20} />
            </button>
            
            <button 
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onClick={()=>{navigate("/login")}}
            >
              Login
            </button>
          </div>
          
          <div style={styles.features}>
            <div style={styles.feature}>
              <Shield size={16} />
              <span>Secure Shopping</span>
            </div>
            <div style={styles.feature}>
              <Truck size={16} />
              <span>Free Shipping</span>
            </div>
            <div style={styles.feature}>
              <Users size={16} />
              <span>50K+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
        <p style={styles.sectionSubtitle}>
          Real reviews from real customers who love shopping with us
        </p>
        
        <div style={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <div style={styles.productRating}>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.rating ? '#fbbf24' : 'none'}
                    color={i < testimonial.rating ? '#fbbf24' : '#6b7280'}
                  />
                ))}
              </div>
              
              <p style={styles.testimonialContent}>"{testimonial.content}"</p>
              
              <div style={styles.testimonialName}>{testimonial.name}</div>
              <div style={styles.testimonialRole}>{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLinks}>
            <a href="#" style={styles.footerLink}>Privacy Policy</a>
            <a href="#" style={styles.footerLink}>Terms of Service</a>
            <a href="#" style={styles.footerLink}>Contact Us</a>
            <a href="#" style={styles.footerLink}>FAQ</a>
          </div>
          
          <div style={styles.copyright}>
            © 2025 Inventora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;