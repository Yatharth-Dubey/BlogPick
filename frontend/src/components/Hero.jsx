// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { Navigate } from "react-router-dom";
export default function Hero() {
  return (
    <section className="hero">
      {/* Floating Background Shapes */}
      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>
      <div className="floating-circle circle3"></div>
      <div className="floating-circle circle4"></div>
      <div className="floating-circle circle5"></div>
      <div className="floating-circle circle6"></div>
      <div className="floating-circle circle7"></div>
      {/* Updated Illustrations */}
      <img
        src="/Blogging-bro.svg"
        alt="blogging concept"
        className="hero-img hero-img-left"
      />
      <img
        src="/undraw_clouds_bmtk.svg"
        alt="blogging cloud"
        className="hero-img hero-img-back"
      />
      <img
        src="/undraw_blogging_38kl.svg"
        alt="blog writing illustration"
        className="hero-img hero-img-right"
      />
      <img
        src="/undraw_fashion-blogging_wfoz.svg"
        alt="fashion blogging illustration"
        className="hero-img hero-img-center"
      />
      <img
        src="/undraw_image-post_auml.svg"
        alt="image posting illustration"
        className="hero-img hero-img-bottom"
      />
      {/* Hero Content */}
      <div className="hero-content">
        <p className="hero-subtitle">Read. Think. Share.</p>
        <h1 className="hero-title">THE BLOGPICK</h1>
        <p className="hero-tagline">
          A platform for creators, thinkers, and storytellers to share ideas that inspire the world.
        </p>
        <Link to="/Register" className="hero-btn">Get Started</Link>
      </div>
    </section>
  );
}