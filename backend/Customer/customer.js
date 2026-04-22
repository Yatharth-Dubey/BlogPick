const express = require("express");
const con = require("../db");
const bcrypt = require("bcrypt");
const register = require("../models/register");
const router = express.Router();
const Blog = require("../models/Blog");

router.post('/registerUser', async (req, res) => {
    try{
        const{name, email, username, password, confirmPassword, agreeToTerms, newsletter} = req.body;
        if(!name || !email || !username || !password || !confirmPassword){
            return res.status(400).json({ error: "Required fields missing!" });
        }
        if(password !== confirmPassword){
            return res.status(400).json({ error: "Passwords do not match!" });
        }
        // Check if user already exists
        const existingUser = await register.findOne({ 
        $or: [{ email }, { username }] 
        });
        if (existingUser) {
            return res.status(400).json({ 
                error: existingUser.email === email ? 'Email already exists!' : 'Username already exists!' 
            });
        }
        const randomNum = Date.now() + Math.floor(Math.random() * 9999);
        const userid = `Blogger-${randomNum}`;
        console.log(name, email, username, password, confirmPassword, agreeToTerms, newsletter);
        const hashedpassword = await bcrypt.hash(password, 10)
        const reg = new register({userid, name, email, username, password: hashedpassword});
        await reg.save();
        res.status(200).json(reg);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

router.post('/loginUser', async (req, res) => {
    try{
        const{username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({ error: "Required fields missing!" });
        }
        const user = await register.findOne({username})
        if(!user){
            return res.status(401).json({
                error: "Invalid username or password!"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                error: "Invalid username or password!"
            });
        }
        res.status(200).json({
            message: "Login successful!",
            user: {
                userid: user.userid,
                name: user.name,
                username: user.username,
                email: user.email
            }
        });
    }catch(error){
        console.error("Login Error:", error);
        res.status(500).json({
            error: "Server error!"
        });
    }
});

router.post('/createBlog', async (req, res) => {
    try{
        const {title, content, author} = req.body;
        if(!title || !content || !author){
            return res.status(400).json({
                error: "Title, content, author are required",
            });
        }
        if (content.replace(/<[^>]*>/g, "").trim().length === 0) {
            return res.status(400).json({
                error: "Blog content cannot be empty",
            });
        }
        const newBlog = new blog({
            title,
            content,
            author,
        });
        const savedBlog = await newBlog.save();
        res.status(201).json({
            message: "Blog created Successfully",
            blog: savedBlog,
        });
    }catch(error){
        console.error("Blog Saving Error:", error);
        res.status(500).json({
            error: "Server error!"
        });
    }
});

router.post('/blogs', async (req, res) => {
    try{
        const blogs = await Blog.find().sort({createdAt: -1});
        res.status(200).json(blogs);
    }catch(error){
        res.status(500).json({error: "Failed to load Blogs"});
    }
});

router.get('/blogs/:slug', async (req, res) =>{
    try{
        const blog = await Blog.findOne({slug: req.params.slug});
        if(!blog){
            return res.status(404).json({error: "Blog is no longer Available"});
        }
        res.status(200).json(blog);
    }catch(error){
        return res.status(500).json({error: "Failed to load Blog"});
    }
});

router.post('/blogs/:slug/like', async (req, res) =>{
    const {username} = req.body;
    try{
        const blog = await Blog.findOne({slug: req.params.slug});
        if(!blog) return res.status(404).json({error: "Failed to like the blog"});
        if(blog.likedBy.includes(username)){
            return res.status(400).json({error: "Already Liked"});
        }
        blog.likes +=1;
        blog.likedBy.push(username);
        await blog.save();
        res.json({likes: blog.likes});
    }catch(error){
        return res.status(500).json({error: "Like Failed"});
    }
});

router.post('/fetchProfile', async(req, res) => {
    try{
        const {userid} = req.body;
        const user = await register.findOne({ userid });
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json(user);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Profile Fetching failed"});
    }
});

router.post('/profile', async(req, res) => {
    try{
        const {userid, name,bio,age,phone,gender,location,github,linkedin,twitter,website,profilepic} = req.body;
        console.log(userid, name, bio, age, phone, gender, location, github, linkedin, twitter, website, profilepic);
        const user = await register.findOne({ userid });
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        user.name = name;
        user.bio = bio;
        user.age = age;
        user.phone = phone;
        user.gender = gender;
        user.location = location;
        user.github = github;
        user.socialLinks = {
            github,
            linkedin,
            twitter
        };
        user.profilepic = profilepic;
        await user.save();
        res.status(200).json({
            message: "Profile Updated Successfully",
            user
        });
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Profile update failed"});
    }
});

module.exports = router;