// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <section className="features">
        <div className="features-container">
          <h2 className="features-title">Why choose BlogPick?</h2>
          <p className="features-subtitle">Discover the platform that empowers creators, thinkers, and storytellers worldwide</p>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
              </div>
              <h3>Simple & Powerful Editor</h3>
              <p>Use our intuitive rich text editor to craft stunning blog posts with images, videos, links, and custom formatting.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </div>
              <h3>SEO Friendly</h3>
              <p>Boost your reach with automatic SEO optimization, meta tags, and analytics for all your articles.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3>Secure & Fast</h3>
              <p>Your blogs are protected with enterprise-grade security and load blazingly fast for the best reader experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>
              <h3>Community Focused</h3>
              <p>Connect with readers, get feedback, and build your audience with our integrated community features.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <h3>Analytics Dashboard</h3>
              <p>Track views, engagement, and reader demographics with our comprehensive analytics dashboard.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </div>
              <h3>Dark Mode Ready</h3>
              <p>Automatic dark mode support ensures comfortable reading in any lighting condition.</p>
            </div>
          </div>
          <div className="cta-section">
            <h2 className="cta-title">Start sharing your voice with the world!</h2>
            <p className="cta-subtitle">Join thousands of creators who are already publishing on BlogPick</p>
            <div className="cta-buttons">
              <Link to="/register" className="cta-btn primary">
                Get Started Free
              </Link>
              <Link to="/login" className="cta-btn secondary">
                Start Writing
              </Link>
            </div>
            <p className="cta-note">No credit card required • Free forever plan available</p>
          </div>
        </div>
        {/* Floating Background Elements */}
        <div className="floating-element el1"></div>
        <div className="floating-element el2"></div>
        <div className="floating-element el3"></div>
        <div className="floating-element el4"></div>
        <div className="floating-element el5"></div>
        <div className="floating-element el6"></div>
        <div className="floating-element el7"></div>
        <div className="floating-element el8"></div>
        <div className="floating-element el9"></div>
      </section>
    </div>
  );
}
// CSS Styles
const styles = `
  .home {
    width: 100%;
    overflow: hidden;
  }
  /* 🌈 FEATURES SECTION */
  .features {
    position: relative;
    padding: 80px 20px;
    background: linear-gradient(135deg, #f9a8d4 0%, #c084fc 50%, #9333ea 100%);
    text-align: center;
    color: #fff;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .features-container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  /* Background glow effects */
  .features::before {
    content: "";
    position: absolute;
    top: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    filter: blur(80px);
    animation: float 8s ease-in-out infinite alternate;
  }

  .features::after {
    content: "";
    position: absolute;
    bottom: -80px;
    right: -80px;
    width: 250px;
    height: 250px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(60px);
    animation: float 10s ease-in-out infinite alternate-reverse;
  }

  /* Floating elements */
  .floating-element {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    animation: float 12s ease-in-out infinite;
  }

  .el1 {
    width: 80px;
    height: 80px;
    top: 15%;
    left: 10%;
    animation-delay: 0s;
  }

  .el2 {
    width: 120px;
    height: 120px;
    bottom: 20%;
    left: 15%;
    animation-delay: 2s;
  }

  .el7 {
    width: 120px;
    height: 120px;
    top: 20%;
    left: 5%;
    animation-delay: 2s;
  }

  .el8 {
    width: 120px;
    height: 120px;
    top: 20%;
    left: 15%;
    animation-delay: 2s;
  }

  .el9 {
    width: 120px;
    height: 120px;
    top: 50%;
    left: 15%;
    animation-delay: 2s;
  }

  .el3 {
    width: 60px;
    height: 60px;
    top: 25%;
    right: 15%;
    animation-delay: 4s;
  }

  .el4 {
    width: 100px;
    height: 100px;
    bottom: 15%;
    right: 10%;
    animation-delay: 6s;
  }

  .el5 {
    width: 100px;
    height: 100px;
    bottom: 15%;
    left: 10%;
    animation-delay: 6s;
  }

  .el6 {
    width: 100px;
    height: 100px;
    bottom: 13%;
    right: 7%;
    animation-delay: 6s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-30px) rotate(180deg);
    }
  }

  /* Titles */
  .features-title {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 20px;
    font-weight: 800;
    letter-spacing: -0.5px;
    background: linear-gradient(to right, #ffffff, #f0f0f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .features-subtitle {
    font-size: clamp(1rem, 3vw, 1.2rem);
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 60px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }

  /* ✨ Feature Grid */
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 80px;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    padding: 40px 30px;
    border-radius: 24px;
    color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align: left;
    position: relative;
    overflow: hidden;
  }

  .feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #9eff4d, #a7f3d0);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  .feature-card:hover {
    transform: translateY(-15px) scale(1.02);
    background: rgba(255, 255, 255, 0.18);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .feature-card:hover::before {
    transform: scaleX(1);
  }

  .feature-icon {
    width: 64px;
    height: 64px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    color: #9eff4d;
    transition: all 0.3s ease;
  }

  .feature-card:hover .feature-icon {
    background: rgba(158, 255, 77, 0.2);
    transform: scale(1.1) rotate(5deg);
  }

  .feature-card h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.3px;
  }

  .feature-card p {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }

  /* CTA Section */
  .cta-section {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    padding: 50px 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    max-width: 800px;
    margin: 0 auto;
  }

  .cta-title {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    margin-bottom: 15px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.5px;
  }

  .cta-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 35px;
    line-height: 1.5;
  }

  .cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .cta-btn {
    padding: 16px 36px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 180px;
    border: 2px solid transparent;
  }

  .cta-btn.primary {
    background: linear-gradient(90deg, #9eff4d, #a7f3d0);
    color: #000;
    box-shadow: 0 6px 20px rgba(158, 255, 77, 0.3);
  }

  .cta-btn.secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
  }

  .cta-btn:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  }

  .cta-btn.primary:hover {
    background: white;
    color: #9333ea;
  }

  .cta-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.8);
  }

  .cta-note {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-top: 25px;
    font-style: italic;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .feature-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }
    
    .cta-section {
      padding: 40px 30px;
    }
    
    .features {
      padding: 60px 20px;
    }
  }

  @media (max-width: 768px) {
    .feature-grid {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .feature-card {
      padding: 30px 25px;
    }
    
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .cta-btn {
      width: 80%;
      max-width: 300px;
    }
    
    .features::before,
    .features::after {
      display: none;
    }
    
    .floating-element {
      opacity: 0.3;
    }
  }

  @media (max-width: 480px) {
    .features {
      padding: 40px 15px;
    }
    
    .features-title {
      font-size: 1.8rem;
    }
    
    .features-subtitle {
      font-size: 1rem;
      margin-bottom: 40px;
    }
    
    .feature-card {
      padding: 25px 20px;
    }
    
    .feature-icon {
      width: 56px;
      height: 56px;
      margin-bottom: 20px;
    }
    
    .feature-card h3 {
      font-size: 1.2rem;
    }
    
    .feature-card p {
      font-size: 0.95rem;
    }
    
    .cta-section {
      padding: 30px 20px;
      border-radius: 20px;
    }
    
    .cta-title {
      font-size: 1.6rem;
    }
    
    .cta-subtitle {
      font-size: 1rem;
    }
    
    .cta-btn {
      padding: 14px 28px;
      font-size: 1rem;
    }
    
    .floating-element {
      display: none;
    }
  }

  /* Reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    .features::before,
    .features::after,
    .floating-element,
    .feature-card,
    .feature-icon,
    .cta-btn {
      animation: none;
      transition: none;
    }
    
    .feature-card:hover {
      transform: none;
    }
  }

  /* Dark mode adjustments */
  @media (prefers-color-scheme: dark) {
    .features {
      background: linear-gradient(135deg, #d946ef 0%, #7c3aed 50%, #4f46e5 100%);
    }
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);