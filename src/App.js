
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogCard from './components/BlogCard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Auth/Login';
import {Dashboard} from './pages/Home/Dashboard';
import { UserBlog } from './pages/Home/Userblog';
import { PostBlog } from './pages/Home/PostBlog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/user' element={<Dashboard/>} />
        <Route path='/user/myblogs' element={<UserBlog/>} />
        <Route path='/user/writeBlog' element={<PostBlog/>} />
      </Routes>
    </div>
  );
}

export default App;
