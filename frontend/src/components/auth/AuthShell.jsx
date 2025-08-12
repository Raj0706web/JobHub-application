import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Auth.css';

export default function AuthShell() {
  const location = useLocation();
  const navigate = useNavigate();

  const isSignupRoute = location.pathname === '/auth/signup';
  const [activeSignup, setActiveSignup] = useState(isSignupRoute);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isSignupRoute !== activeSignup) {
      setAnimating(true);
      requestAnimationFrame(() => setActiveSignup(isSignupRoute));
      const timer = setTimeout(() => setAnimating(false), 650);
      return () => clearTimeout(timer);
    }
  }, [isSignupRoute, activeSignup]);

  const handleToggle = () => {
    setAnimating(true);
    const target = activeSignup ? '/auth/login' : '/auth/signup';
    navigate(target);
  };

  return (
    <div className="auth-container">
      <div className={`container ${activeSignup ? 'active' : ''} ${animating ? 'animating' : ''}`}>
        {/* Nested route renders Login or Signup */}
        <Outlet />

        {/* Sliding Toggle Panel */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to login to this Awesome Website</p>
              <button className="hidden toggle-btn" type="button" onClick={handleToggle}>
                Sign In
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use to this Awesome Website</p>
              <button className="hidden toggle-btn" type="button" onClick={handleToggle}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
