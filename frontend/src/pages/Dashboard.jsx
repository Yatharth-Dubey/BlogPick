import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import "./Dashboard.css";
const INITIAL_STATS = {
  posts: 12,
  likes: 245,
  comments: 34,
  drafts: 3,
};
const RECENT_ACTIVITY = [
  { id: 1, title: "Getting Started with React Hooks", time: "2 hours ago", icon: "📝" },
  { id: 2, title: 'Your post "CSS Grid Guide" got 15 likes', time: "1 day ago", icon: "❤️" },
  { id: 3, title: 'John commented on "JavaScript Best Practices"', time: "2 days ago", icon: "💬" },
  { id: 4, title: "Sarah started following you", time: "3 days ago", icon: "👤" },
  { id: 5, title: 'New draft saved: "Web Performance Tips"', time: "1 week ago", icon: "💾" },
];
const POPULAR_POSTS = [
  { id: 1, title: "React 18 Features Explained", views: 1245, likes: 89, date: "2024-01-15" },
  { id: 2, title: "Mastering CSS Grid", views: 892, likes: 67, date: "2024-01-10" },
  { id: 3, title: "TypeScript for Beginners", views: 567, likes: 45, date: "2024-01-05" },
];
export default function Dashboard() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userStats] = useState(INITIAL_STATS);
  /* 🔐 Protect Route */
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);
  if (loading) return null;
  if (!user) return null;
  const goTo = (path) => navigate(path);
  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome back</h1>
          <p className="welcome-subtitle">
            Here's what's happening with your blog today
          </p>
        </div>

        <button className="primary-action-btn" onClick={() => goTo("/create")}>
          ✏️ Create New Post
        </button>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <StatCard icon="📝" value={userStats.posts} label="Published Posts" />
        <StatCard icon="❤️" value={userStats.likes} label="Total Likes" />
        <StatCard icon="💬" value={userStats.comments} label="Comments Received" />
        <StatCard icon="📊" value={userStats.drafts} label="Drafts Saved" />
      </div>

      {/* Main Grid */}
      <div className="dashboard-grid">
        {/* Left */}
        <div className="left-column">
          <div className="quick-actions-card">
            <h2>Quick Actions</h2>
            <div className="actions-grid">
              <ActionButton icon="✏️" text="Create Post" onClick={() => goTo("/create")} />
              <ActionButton icon="📋" text="Manage Posts" onClick={() => goTo("/my-posts")} />
              <ActionButton icon="📊" text="View Analytics" onClick={() => goTo("/analytics")} />
              <ActionButton icon="👤" text="Edit Profile" onClick={() => goTo("/profile")} />
            </div>
          </div>

          <div className="activity-card">
            <div className="card-header">
              <h2>Recent Activity</h2>
              <Link to="/activity" className="view-all-link">
                View All →
              </Link>
            </div>

            <div className="activity-list">
              {RECENT_ACTIVITY.map((item) => (
                <div key={item.id} className="activity-item">
                  <div className="activity-icon">{item.icon}</div>
                  <div>
                    <p className="activity-title">{item.title}</p>
                    <span className="activity-time">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="right-column">
          <div className="popular-posts-card">
            <div className="card-header">
              <h2>Your Popular Posts</h2>
              <Link to="/posts" className="view-all-link">
                See All →
              </Link>
            </div>

            <div className="popular-posts-list">
              {POPULAR_POSTS.map((post) => (
                <div key={post.id} className="popular-post-item">
                  <div>
                    <h4>{post.title}</h4>
                    <span>👁️ {post.views} &nbsp; ❤️ {post.likes}</span>
                  </div>
                  <span className="post-date">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="tips-card">
            <h2>💡 Blogging Tips</h2>
            <ul>
              <li>Use engaging titles</li>
              <li>Add relevant images</li>
              <li>Reply to comments</li>
              <li>Post consistently</li>
              <li>Use proper tags</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------ Reusable Components ------------------ */

const StatCard = ({ icon, value, label }) => (
  <div className="stat-card">
    <div className="stat-icon">{icon}</div>
    <div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  </div>
);

const ActionButton = ({ icon, text, onClick }) => (
  <button className="action-btn" onClick={onClick}>
    <span>{icon}</span>
    <span>{text}</span>
  </button>
);