import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo">
            <h2 className="logo-text">THE BLOGPICK</h2>
            <p className="logo-tagline">Read. Think. Share.</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3 className="link-title">Platform</h3>
              <ul>
                <li><a href="/features">Features</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/stories">Success Stories</a></li>
                <li><a href="/updates">Updates</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3 className="link-title">Resources</h3>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/guides">Guides</a></li>
                <li><a href="/help">Help Center</a></li>
                <li><a href="/community">Community</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3 className="link-title">Company</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/press">Press</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3 className="link-title">Legal</h3>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
                <li><a href="/gdpr">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-desc">Subscribe to our newsletter for the latest updates</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://twitter.com" className="social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://facebook.com" className="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com" className="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          
          <p className="copyright">
            © {new Date().getFullYear()} BlogPick. All rights reserved.
          </p>
          
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="/terms">Terms of Service</a>
            <span className="separator">•</span>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
// CSS Styles
const styles = `
  .footer {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: #e6e6e6;
    padding: 60px 0 0;
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow: hidden;
  }
  .footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #f87171, #f43f5e, #9333ea);
    background-size: 300% 300%;
    animation: gradientFlow 8s ease infinite;
  }
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .footer-main {
    display: grid;
    grid-template-columns: 2fr 3fr 1.5fr;
    gap: 40px;
    margin-bottom: 50px;
  }
  .footer-logo .logo-text {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(45deg, #f87171, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }
  .footer-logo .logo-tagline {
    color: #b0b0b0;
    font-size: 0.9rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .footer-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  .link-group .link-title {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
  }
  .link-group .link-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #f87171, #9333ea);
  }
  .link-group ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .link-group ul li {
    margin-bottom: 12px;
  }
  .link-group ul li a {
    color: #b0b0b0;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    display: inline-block;
    position: relative;
  }
  .link-group ul li a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: #f43f5e;
    transition: width 0.3s ease;
  }
  .link-group ul li a:hover {
    color: #ffffff;
    transform: translateX(5px);
  }
  .link-group ul li a:hover::after {
    width: 100%;
  }
  .footer-newsletter {
    background: rgba(255, 255, 255, 0.05);
    padding: 25px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .newsletter-title {
    color: #ffffff;
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: 600;
  }
  .newsletter-desc {
    color: #b0b0b0;
    font-size: 0.9rem;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  .newsletter-form {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .newsletter-input {
    flex: 1;
    min-width: 200px;
    padding: 12px 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    font-size: 0.95rem;
    transition: all 0.3s ease;
  }
  .newsletter-input:focus {
    outline: none;
    border-color: #f43f5e;
    box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.2);
  }
  .newsletter-input::placeholder {
    color: #888;
  }
  .newsletter-btn {
    padding: 12px 24px;
    background: linear-gradient(45deg, #f87171, #f43f5e);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    white-space: nowrap;
  }
  .newsletter-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(244, 63, 94, 0.3);
  }
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  .social-links {
    display: flex;
    gap: 15px;
  }
  .social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b0b0b0;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .social-link:hover {
    background: linear-gradient(45deg, #f87171, #f43f5e);
    color: white;
    transform: translateY(-3px);
  }
  .copyright {
    color: #888;
    font-size: 0.9rem;
    text-align: center;
    flex: 1;
  }
  .footer-legal {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .footer-legal a {
    color: #b0b0b0;
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s ease;
  }
  .footer-legal a:hover {
    color: #ffffff;
  }
  .separator {
    color: #666;
    font-size: 0.8rem;
  }
  /* Animation */
  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  /* Responsive Design */
  @media (max-width: 1024px) {
    .footer-main {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .footer-links {
      grid-template-columns: repeat(2, 1fr);
    }
    .footer-newsletter {
      max-width: 500px;
    }
  }
  @media (max-width: 768px) {
    .footer {
      padding: 40px 0 0;
    }
    .footer-main {
      gap: 30px;
    }
    .footer-links {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    .footer-bottom {
      flex-direction: column;
      text-align: center;
      gap: 25px;
    }
    .social-links {
      justify-content: center;
    }
    .footer-legal {
      justify-content: center;
    }
    .newsletter-form {
      flex-direction: column;
    }
    .newsletter-input {
      min-width: 88%;
    }
  }
  @media (max-width: 480px) {
    .footer-logo .logo-text {
      font-size: 1.7rem;
    }
    .footer-content {
      padding: 0 15px;
    }
    .footer-newsletter {
      padding: 20px;
    }
    .newsletter-btn {
      width: 100%;
    }
    .footer-legal {
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    .separator {
      display: none;
    }
    .footer-legal a {
      margin: 0 8px;
    }
  }
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .footer {
      background: linear-gradient(135deg, #0a0a0f 0%, #0d1117 100%);
    }
    
    .newsletter-input {
      background: rgba(255, 255, 255, 0.03);
    }
  }
`;
// Inject styles
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);