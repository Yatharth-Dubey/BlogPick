import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
export default function Register() {
  const navi = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    newsletter: true
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    return newErrors;
  };
  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and underscores';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and numbers';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    return newErrors;
  };
  const handleNextStep = () => {
    if (currentStep === 1) {
      const step1Errors = validateStep1();
      if (Object.keys(step1Errors).length > 0) {
        setErrors(step1Errors);
        return;
      }
      setCurrentStep(2);
    }
  };
  const handlePrevStep = () => {
    setCurrentStep(1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit form");
    if (currentStep === 1) {
      handleNextStep();
      return;
    }
    const step2Errors = validateStep2();
    if (Object.keys(step2Errors).length > 0) {
      setErrors(step2Errors);
      return;
    }
    setIsLoading(true);
    try{
      console.log("Sending data:", formData);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/registerUser`, formData);
      console.log("Response:", response);
      if(response.status === 200){
        alert("Register Successful!!");
        sessionStorage.setItem("username", formData.username)
        navi("/login");
      }
    }catch(error){
      console.error("Register Error:", error);
      alert("Something went wrong, Register  Failed");
      if (error.response) {
        // Server responded with error
        console.error("Server Error:", error.response.data);
        alert(`Registration Failed: ${error.response.data.error || 'Unknown error'}`);
      } else if (error.request) {
        // No response received
        console.error("No Response:", error.request);
        alert("No response from server. Please check your connection.");
      } else {
        // Request setup error
        console.error("Request Error:", error.message);
        alert("Registration failed. Please try again.");
      }
    }
    finally{
      setIsLoading(false);
    }
  };
  const handleSocialRegister = (provider) => {
    console.log(`Registering with ${provider}`);
    // Social registration implementation would go here
  };
  const checkUsernameAvailability = async () => {
    if (!formData.username || formData.username.length < 3) return;
    // Simulate username check
    const takenUsernames = ['admin', 'user', 'test', 'demo'];
    if (takenUsernames.includes(formData.username.toLowerCase())) {
      setErrors(prev => ({ ...prev, username: 'Username is already taken' }));
    } else {
      setErrors(prev => ({ ...prev, username: '' }));
    }
  };
  const getPasswordStrength = (password) => {
    if (!password) return { score: 0, label: 'None', color: '#e0e0e0' };
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;
    const strengths = [
      { label: 'Very Weak', color: '#f43f5e' },
      { label: 'Weak', color: '#fb923c' },
      { label: 'Fair', color: '#fbbf24' },
      { label: 'Good', color: '#4ade80' },
      { label: 'Strong', color: '#2dd4bf' }
    ];
    return strengths[Math.min(score - 1, 4)] || strengths[0];
  };
  const passwordStrength = getPasswordStrength(formData.password);
  return (
    <div className="register-page">
      {/* Background Elements */}
      <div className="bg-blur-circle circle-1"></div>
      <div className="bg-blur-circle circle-2"></div>
      <div className="bg-blur-circle circle-3"></div>
      <div className="register-container">
        {/* Left Side - Benefits */}
        <div className="register-benefits">
          <div className="benefits-content">
            <h2 className="benefits-title">Join Our Community</h2>
            <p className="benefits-subtitle">
              Start your writing journey with thousands of creators
            </p>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">✍️</div>
                <div className="benefit-text">
                  <h4>Powerful Editor</h4>
                  <p>Write and format your posts with ease</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📈</div>
                <div className="benefit-text">
                  <h4>Grow Your Audience</h4>
                  <p>Reach readers worldwide with SEO tools</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💬</div>
                <div className="benefit-text">
                  <h4>Engage & Connect</h4>
                  <p>Build relationships with your readers</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-text">
                  <h4>Lightning Fast</h4>
                  <p>Blazing fast loading for best reader experience</p>
                </div>
              </div>
            </div>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Writers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Posts Published</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Monthly Readers</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Registration Form */}
        <div className="register-form-container">
          <div className="form-header">
            <div className="progress-steps">
              <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
                <div className="step-number">1</div>
                <div className="step-label">Account Info</div>
              </div>
              <div className="step-line"></div>
              <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
                <div className="step-number">2</div>
                <div className="step-label">Credentials</div>
              </div>
            </div>
            <h1 className="form-title">Create Account</h1>
            <p className="form-subtitle">
              {currentStep === 1 
                ? 'Start by telling us about yourself' 
                : 'Set up your login credentials'}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="register-form" noValidate>
            {currentStep === 1 ? (
              <>
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <input
                      type="text"
                      id="fullName"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="John Doe"
                      disabled={isLoading}
                    />
                  </div>
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="you@example.com"
                      disabled={isLoading}
                    />
                  </div>
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <button 
                  type="button"
                  onClick={handleNextStep}
                  className="next-step-btn"
                  disabled={isLoading}
                >
                  Continue
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      onBlur={checkUsernameAvailability}
                      className={`form-input ${errors.username ? 'error' : ''}`}
                      placeholder="johndoe"
                      disabled={isLoading}
                    />
                  </div>
                  {errors.username ? (
                    <span className="error-message">{errors.username}</span>
                  ) : formData.username && (
                    <span className="success-message">✓ Username available</span>
                  )}
                  <p className="input-hint">Letters, numbers, and underscores only</p>
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`form-input ${errors.password ? 'error' : ''}`}
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex="-1"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        {showPassword ? (
                          <>
                            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                            <line x1="1" y1="1" x2="23" y2="23"/>
                          </>
                        ) : (
                          <>
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                  {/* Password Strength Meter */}
                  <div className="password-strength">
                    <div className="strength-meter">
                      <div 
                        className="strength-bar" 
                        style={{
                          width: `${(passwordStrength.score + 1) * 20}%`,
                          backgroundColor: passwordStrength.color
                        }}
                      ></div>
                    </div>
                    <div className="strength-label">
                      Strength: <span style={{ color: passwordStrength.color }}>
                        {passwordStrength.label}
                      </span>
                    </div>
                  </div>
                  <div className="password-requirements">
                    <p className="requirements-title">Password must contain:</p>
                    <ul className="requirements-list">
                      <li className={formData.password.length >= 8 ? 'met' : ''}>
                        At least 8 characters
                      </li>
                      <li className={/[a-z]/.test(formData.password) ? 'met' : ''}>
                        One lowercase letter
                      </li>
                      <li className={/[A-Z]/.test(formData.password) ? 'met' : ''}>
                        One uppercase letter
                      </li>
                      <li className={/\d/.test(formData.password) ? 'met' : ''}>
                        One number
                      </li>
                    </ul>
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <div className="input-with-icon">
                    <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      tabIndex="-1"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        {showConfirmPassword ? (
                          <>
                            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                            <line x1="1" y1="1" x2="23" y2="23"/>
                          </>
                        ) : (
                          <>
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
                <div className="form-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="checkbox-input"
                      disabled={isLoading}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">
                      I agree to the{' '}
                      <Link to="/terms" className="terms-link">
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link to="/privacy" className="terms-link">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="checkbox-input"
                      disabled={isLoading}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">
                      Send me product updates, tips, and inspiration
                    </span>
                  </label>
                </div>
                <div className="form-buttons">
                  <button 
                    type="button"
                    onClick={handlePrevStep}
                    className="prev-step-btn"
                    disabled={isLoading}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner"></span>
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </>
            )}
          </form>
          {currentStep === 1 && (
            <>
              <div className="divider">
                <span>or register with</span>
              </div>
              <div className="social-register">
                <button 
                  type="button" 
                  className="social-btn google"
                  onClick={() => handleSocialRegister('google')}
                  disabled={isLoading}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Google</span>
                </button>
                <button 
                  type="button" 
                  className="social-btn github"
                  onClick={() => handleSocialRegister('github')}
                  disabled={isLoading}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </button>
              </div>
            </>
          )}
          <div className="login-link">
            Already have an account?{' '}
            <Link to="/login" className="login-link-btn">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}