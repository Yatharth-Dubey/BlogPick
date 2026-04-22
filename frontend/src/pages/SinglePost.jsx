import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../components/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SinglePost.css';

export default function SinglePost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [post, setPost] = useState(null);
    const [authorDetails, setAuthorDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [liking, setLiking] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/blogs/${id}`);
                setPost(response.data);
                
                // Fetch author details if available
                if (response.data.author) {
                    try {
                        const authorRes = await axios.get(
                            `${process.env.REACT_APP_API_URL}/users/${response.data.author}`
                        );
                        setAuthorDetails(authorRes.data);
                    } catch (authorErr) {
                        console.log('Could not fetch author details');
                    }
                }
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Failed to load post. It may have been deleted or does not exist.');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    const likePost = async () => {
        if (!user) {
            alert('Please login to like this post');
            navigate('/login');
            return;
        }

        try {
            setLiking(true);
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/blogs/${id}/like`, 
                { username: user.username },
                { headers: { 'Content-Type': 'application/json' } }
            );
            setPost(prev => ({ ...prev, likes: res.data.likes }));
        } catch (error) {
            if (error.response?.status === 409) {
                alert('You have already liked this post!');
            } else {
                alert('Failed to like post. Please try again.');
            }
        } finally {
            setLiking(false);
        }
    };

    if (loading) {
        return (
            <div className="single-post loading">
                <div className="loading-spinner"></div>
                <p>Loading post...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="single-post error">
                <p className="error-message">{error}</p>
                <button onClick={() => navigate('/')} className="back-btn">
                    ← Back to Home
                </button>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="single-post not-found">
                <p>Post not found</p>
                <button onClick={() => navigate('/')} className="back-btn">
                    ← Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className='single-post'>
            <button 
                onClick={() => navigate(-1)} 
                className="back-btn"
                aria-label="Go back"
            >
                ← Back
            </button>
            
            {/* Author info at the top */}
            <div className="author-header">
                <div className="author-avatar">
                    <span role="img" aria-label="Author">👤</span>
                </div>
                <div className="author-text">
                    <h2 className="author-name">{post.author}</h2>
                    <p className="post-date">
                        Published on {new Date(post.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>
            </div>

            {/* Title */}
            <h1 className="post-title">{post.title}</h1>

            <div className="content-wrapper">
                {/* Main content */}
                <div className="main-content">
                    <div className='content' dangerouslySetInnerHTML={{ __html: post.content }} />
                    
                    <div className="like-section">
                        <button 
                            onClick={likePost} 
                            disabled={liking}
                            className="like-btn"
                            aria-label={liking ? 'Liking...' : `Like this post. Current likes: ${post.likes}`}
                        >
                            {liking ? (
                                <span className="spinner"></span>
                            ) : (
                                <>
                                    <span role="img" aria-label="Heart">❤️</span>
                                    <span className="likes-count">{post.likes || 0}</span>
                                </>
                            )}
                        </button>
                        <p className="likes-text">
                            {post.likes || 0} {post.likes === 1 ? 'person likes' : 'people like'} this post
                        </p>
                    </div>
                </div>

                {/* Author card sidebar */}
                <div className="author-card">
                    <div className="author-card-header">
                        <div className="author-card-avatar">
                            <span role="img" aria-label="Author">👤</span>
                        </div>
                        <h3>About the Author</h3>
                        <p className="author-card-name">{post.author}</p>
                    </div>
                    
                    <div className="author-card-details">
                        {authorDetails ? (
                            <>
                                {authorDetails.bio && (
                                    <div className="author-card-field">
                                        <span className="field-label">Bio:</span>
                                        <p>{authorDetails.bio}</p>
                                    </div>
                                )}
                                {authorDetails.location && (
                                    <div className="author-card-field">
                                        <span className="field-label">Location:</span>
                                        <p>{authorDetails.location}</p>
                                    </div>
                                )}
                                {authorDetails.website && (
                                    <div className="author-card-field">
                                        <span className="field-label">Website:</span>
                                        <a href={authorDetails.website} target="_blank" rel="noopener noreferrer">
                                            {authorDetails.website}
                                        </a>
                                    </div>
                                )}
                                {authorDetails.joinedDate && (
                                    <div className="author-card-field">
                                        <span className="field-label">Joined:</span>
                                        <p>{new Date(authorDetails.joinedDate).toLocaleDateString()}</p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="author-card-field">
                                <p className="no-details">No additional details available</p>
                            </div>
                        )}
                        
                        <div className="author-card-stats">
                            <div className="stat-item">
                                <span className="stat-number">-</span>
                                <span className="stat-label">Posts</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">{post.likes || 0}</span>
                                <span className="stat-label">Likes</span>
                            </div>
                        </div>
                    </div>
                    
                    <button 
                        className="follow-btn"
                        onClick={() => alert('Follow feature coming soon!')}
                    >
                        Follow Author
                    </button>
                </div>
            </div>
        </div>
    );
}