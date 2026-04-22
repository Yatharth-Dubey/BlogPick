import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import Home from './pages/Home';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/posts/:id" element={<SinglePost/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}
export default App;