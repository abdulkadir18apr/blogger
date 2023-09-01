
import './App.css';
import BlogCard from './components/BlogCard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Auth/Login';
import {Dashboard} from './pages/Home/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
