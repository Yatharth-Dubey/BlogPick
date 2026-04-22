import React, { useEffect, useState, useRef, useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/AuthContext'
import './Posts.css'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const containerRef = useRef(null)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/blogs`, {
          headers: {
            'Cache-Control': 'no-cache'
          }
        })
        setPosts(response.data)
        setError(null)
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError(err.response?.data?.error || 'Failed to load posts. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
    const handleScroll = () => {
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll('.post-card')
        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect()
          const offset = rect.top - window.innerHeight
          if (offset < 100) {
            card.style.opacity = '1'
            card.style.transform = 'translateY(0)'
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function to handle post click with validation
  const handlePostClick = (e, postId) => {
    e.preventDefault()
    
    // Check if user is logged in
    if (!user) {
      const confirmLogin = window.confirm('Please login to read this post. Would you like to login now?')
      if (confirmLogin) {
        navigate('/login')
      }
      return
    }
    
    // If user is logged in, navigate to the post
    navigate(`/posts/${postId}`)
  }

  if (loading) {
    return (
      <div className="posts-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading inspiring posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="posts-container">
        <div className="error-message">
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="read-more"
            style={{marginTop: '1rem'}}
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="posts-container">
        <div className="no-posts">
          <h3>No posts yet</h3>
          <p>Be the first to share your thoughts!</p>
          <Link to="/create" className="read-more" style={{marginTop: '1rem'}}>
            Create Post
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div 
        className="posts-container" 
        ref={containerRef}
        id="posts-container"
      >
        {posts.map((post, index) => (
          <div 
            key={post._id} 
            className="post-card"
            data-index={index + 1}
            style={{ '--index': index }}
          >
            {/* Title link with validation */}
            <Link 
              to={user ? `/posts/${post._id}` : '#'} 
              className="post-link"
              onClick={(e) => handlePostClick(e, post._id)}
            >
              <h2 className="post-title">{post.title}</h2>
            </Link>
            
            <p className="author">
              {post.author || 'Anonymous'} • {new Date(post.createdAt).toDateString()}
            </p>
            
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{
                __html: post.content && post.content.length > 200 
                  ? post.content.slice(0, 200) + '...' 
                  : post.content || 'No content available'
              }}
            />
            
            <div className="post-actions">
              <div className="likes">
                <span className="likes-count">{post.likes || 0}</span>
              </div>
              
              {/* Read More button with validation */}
              {user ? (
                <Link to={`/posts/${post._id}`} className="read-more">
                  Read More
                </Link>
              ) : (
                <button 
                  className="read-more"
                  onClick={(e) => handlePostClick(e, post._id)}
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}