import React, { useEffect, useState } from "react";
import { 
  FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, 
  FaVenusMars, FaBirthdayCake, FaUser, FaGlobe, 
  FaSave, FaCamera, FaRobot, FaGamepad, FaPalette, 
  FaUserAstronaut, FaUserTie, FaSmile, 
  FaPhone
} from "react-icons/fa";
import "./Profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    age: "",
    phone: "",
    gender: "",
    location: "",
    github: "",
    linkedin: "",
    twitter: "",
    website: "",
    profilepic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Blake",
  });
  const [isEditing, setIsEditing] = useState(true);
  const [activeTab, setActiveTab] = useState("personal");
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const avatarStyles = [
    { 
      id: "avataaars", 
      name: "Cartoon", 
      icon: <FaSmile />,
      color: "#667eea",
      description: "Cartoon-style avatars"
    },
    { 
      id: "adventurer", 
      name: "Adventurer", 
      icon: <FaUserAstronaut />,
      color: "#f5576c",
      description: "RPG adventurer style"
    },
    { 
      id: "pixel-art", 
      name: "Pixel Art", 
      icon: <FaGamepad />,
      color: "#764ba2",
      description: "8-bit retro pixels"
    },
    { 
      id: "bottts", 
      name: "Robot", 
      icon: <FaRobot />,
      color: "#4a6491",
      description: "Cool robot avatars"
    },
    { 
      id: "personas", 
      name: "Professional", 
      icon: <FaUserTie />,
      color: "#2c3e50",
      description: "Business professional"
    },
    { 
      id: "lorelei", 
      name: "Minimal", 
      icon: <FaPalette />,
      color: "#f093fb",
      description: "Simple and clean"
    }
  ];
  const user = JSON.parse(sessionStorage.getItem("User"));
  const userid = user?.userid;
  console.log("userid:", userid);
  useEffect(() => {
    const fetchProfile = async () =>{
      try{
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/fetchProfile`, {
          userid
        })
        if(response.status === 200 && response.data){
          setFormData(prevState => ({
            ...prevState,
            ...response.data,
            profilepic: response.data.profilepic || prevState.profilepic
          }));
          setIsEditing(false);
        }
      }catch(error){
        console.error("Profile Fetching Error:", error);
        alert("Something went wrong, Request Failed");
        if (error.response) {
          console.error("Server Error:", error.response.data);
          alert(`Profile Fetching Failed: ${error.response.data.error || 'Unknown error'}`);
        } else if (error.request) {
          console.error("No Response:", error.request);
          alert("No response from server. Please check your connection.");
        } else {
          console.error("Request Error:", error.message);
          alert("Profile Fetching failed. Please try again.");
        }
      }
    }
    if(userid){
      fetchProfile();  
    }
  }, [userid]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsEditing(false);
    try{
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/profile`, 
        {userid,
        ...formData});
      if(response.status === 200){
        alert("Profile saved successfully!");
        navigate("/profile");
      }
    }catch(error){
      console.error("Profile Updation Error:", error);
      alert("Something went wrong, Request Failed");
      if (error.response) {
        console.error("Server Error:", error.response.data);
        alert(`Profile Updation Failed: ${error.response.data.error || 'Unknown error'}`);
      } else if (error.request) {
        console.error("No Response:", error.request);
        alert("No response from server. Please check your connection.");
      } else {
        console.error("Request Error:", error.message);
        alert("Profile Updatation failed. Please try again.");
      }
    }
  };
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilepic: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const changeAvatarStyle = (styleId) => {
    const seed = formData.name || "user";
    const newAvatar = `https://api.dicebear.com/7.x/${styleId}/svg?seed=${seed}`;
    setFormData({
      ...formData,
      profilepic: newAvatar,
    });
    setShowAvatarSelector(false);
  };
  const generateRandomAvatar = () => {
    const seed = formData.name || Date.now().toString();
    const styles = ["avataaars", "adventurer", "pixel-art", "bottts", "personas", "lorelei"];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const randomAvatar = `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${seed}&r=${Math.random()}`;
    setFormData({
      ...formData,
      profilepic: randomAvatar,
    });
  };
  const socialLinks = [
    { icon: <FaGithub />, name: "github", placeholder: "https://github.com/username" },
    { icon: <FaLinkedin />, name: "linkedin", placeholder: "https://linkedin.com/in/username" },
    { icon: <FaTwitter />, name: "twitter", placeholder: "https://twitter.com/username" },
    { icon: <FaGlobe />, name: "website", placeholder: "https://yourwebsite.com" }
  ];
  return (
    <div className="profile-container">
      {/* Decorative background elements */}
      <div className="bg-blur-circle-1"></div>
      <div className="bg-blur-circle-2"></div>
      <div className="profile-wrapper">
        {/* Profile Preview Card */}
        <div className="profile-preview-card">
          <div className="preview-header">
            <div className="avatar-section">
              <div className="avatar-container">
                <img 
                  src={formData.profilepic} 
                  alt="Profile" 
                  className="profile-avatar"
                />
                <div className="avatar-actions">
                  <label htmlFor="avatar-upload" className="avatar-action-btn upload-btn" title="Upload photo">
                    <FaCamera />
                    <input
                      type="file"
                      id="avatar-upload"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      hidden
                    />
                  </label>
                  <button 
                    className="avatar-action-btn random-btn"
                    onClick={generateRandomAvatar}
                    title="Generate random avatar"
                  >
                    <FaPalette />
                  </button>
                </div>
              </div>
              <h2 className="preview-name">
                {formData.name || "Your Name"}
              </h2>
              <p className="preview-location">
                <FaMapMarkerAlt /> {formData.location || "Location not set"}
              </p>
            </div>
          </div>
          <div className="preview-bio">
            <p>{formData.bio || "No bio added yet. Tell us about yourself!"}</p>
          </div>
          <div className="preview-details">
          <div className="detail-item">
            <FaBirthdayCake className="detail-icon" />
            <div>
              <span className="detail-label">Age</span>
              <span className="detail-value">{formData.age || "Not set"}</span>
            </div>
          </div>
          <div className="detail-item">
            <FaPhone className="detail-icon" />
            <div>
              <span className="detail-label">Phone</span>
              <span className="detail-value">{formData.phone || "Not set"}</span>
            </div>
          </div>
          <div className="detail-item">
            <FaVenusMars className="detail-icon" />
            <div>
              <span className="detail-label">Gender</span>
              <span className="detail-value">{formData.gender || "Not set"}</span>
            </div>
          </div>
        </div>
          {!isEditing && (
            <div className="social-links-preview">
              <h4>Connect with me</h4>
              <div className="social-icons">
                {formData.github && (
                  <a href={formData.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub />
                  </a>
                )}
                {formData.linkedin && (
                  <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                )}
                {formData.twitter && (
                  <a href={formData.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTwitter />
                  </a>
                )}
                {formData.website && (
                  <a href={formData.website} target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>
          )}
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`edit-toggle-btn ${isEditing ? 'view-mode' : 'edit-mode'}`}
          >
            {isEditing ? "View Profile" : "Edit Profile"}
          </button>
        </div>
        <div className={`profile-edit-card ${isEditing ? 'active' : ''}`}>
          <div className="edit-card-header">
            <h2>Edit Profile</h2>
            <p className="subtitle">Customize your public profile</p>
          </div>
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              <FaUser /> Personal
            </button>
            <button 
              className={`tab-btn ${activeTab === 'social' ? 'active' : ''}`}
              onClick={() => setActiveTab('social')}
            >
              <FaGlobe /> Social
            </button>
            <button 
              className={`tab-btn ${activeTab === 'avatar' ? 'active' : ''}`}
              onClick={() => setActiveTab('avatar')}
            >
              <FaPalette /> Avatar
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {activeTab === 'personal' && (
              <div className="tab-content">
                <div className="form-group">
                  <label>
                    <FaUser className="input-icon" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="animated-input"
                  />
                </div>
                <div className="form-group">
                  <label>Bio</label>
                  <textarea
                    name="bio"
                    placeholder="Tell people about yourself..."
                    rows="3"
                    value={formData.bio}
                    onChange={handleChange}
                    className="animated-textarea"
                  />
                  <span className="char-count">{formData.bio.length}/200</span>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      <FaBirthdayCake className="input-icon" />
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      placeholder="Your age"
                      value={formData.age}
                      onChange={handleChange}
                      min="13"
                      max="120"
                      className="animated-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <FaPhone className="input-icon" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="animated-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <FaVenusMars className="input-icon" />
                      Gender
                    </label>
                    <select 
                      name="gender" 
                      value={formData.gender}
                      onChange={handleChange}
                      className="animated-select"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    <FaMapMarkerAlt className="input-icon" />
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={handleChange}
                    className="animated-input"
                  />
                </div>
              </div>
            )}
            {activeTab === 'social' && (
              <div className="tab-content">
                <h3 className="social-title">Social Links</h3>
                <p className="social-subtitle">Add your social media profiles</p>
                {socialLinks.map((link, index) => (
                  <div className="form-group" key={index}>
                    <div className="social-input-wrapper">
                      <span className="social-icon-prefix">
                        {link.icon}
                      </span>
                      <input
                        type="url"
                        name={link.name}
                        placeholder={link.placeholder}
                        value={formData[link.name]}
                        onChange={handleChange}
                        className="social-input"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'avatar' && (
              <div className="tab-content">
                <div className="avatar-section-edit">
                  <h3 className="avatar-title">Choose Your Avatar Style</h3>
                  <p className="avatar-subtitle">Select a style that represents you best</p>
                  <div className="current-avatar-preview">
                    <img 
                      src={formData.profilepic} 
                      alt="Current Avatar" 
                      className="current-avatar-img"
                    />
                  </div>
                  <div className="avatar-upload-section">
                    <h4>Upload Your Own</h4>
                    <div className="upload-zone">
                      <FaCamera className="upload-icon" />
                      <p>Drag & drop or click to upload</p>
                      <label htmlFor="avatar-upload-edit" className="upload-btn-secondary">
                        Choose File
                        <input
                          type="file"
                          id="avatar-upload-edit"
                          accept="image/*"
                          onChange={handleAvatarUpload}
                          hidden
                        />
                      </label>
                      <p className="upload-hint">JPG, PNG or SVG, max 2MB</p>
                    </div>
                  </div>
                  <div className="avatar-styles-grid">
                    <h4>Choose from Styles</h4>
                    <p className="styles-subtitle">Click any style to preview</p>
                    <div className="styles-container">
                      {avatarStyles.map((style) => (
                        <div 
                          key={style.id}
                          className={`style-card ${formData.avatarStyle === style.id ? 'selected' : ''}`}
                          onClick={() => changeAvatarStyle(style.id)}
                          style={{ '--style-color': style.color }}
                        >
                          <div className="style-card-icon" style={{ background: style.color }}>
                            {style.icon}
                          </div>
                          <div className="style-card-content">
                            <h5>{style.name}</h5>
                            <p>{style.description}</p>
                          </div>
                          <button 
                            className="style-select-btn"
                            onClick={() => changeAvatarStyle(style.id)}
                          >
                            {formData.avatarStyle === style.id ? 'Selected' : 'Select'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="random-avatar-section">
                    <h4>Feeling Lucky?</h4>
                    <p>Generate a random avatar</p>
                    <button 
                      className="random-avatar-btn"
                      onClick={generateRandomAvatar}
                    >
                      <FaPalette /> Generate Random Avatar
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="form-actions">
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button type="submit" className="save-btn">
                <FaSave /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      {showAvatarSelector && (
        <div className="avatar-selector-modal">
          <div className="modal-overlay" onClick={() => setShowAvatarSelector(false)}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Choose Avatar Style</h3>
              <button 
                className="modal-close"
                onClick={() => setShowAvatarSelector(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              {avatarStyles.map((style) => (
                <button
                  key={style.id}
                  className="avatar-style-option"
                  onClick={() => changeAvatarStyle(style.id)}
                >
                  <div className="option-icon" style={{ color: style.color }}>
                    {style.icon}
                  </div>
                  <span>{style.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}