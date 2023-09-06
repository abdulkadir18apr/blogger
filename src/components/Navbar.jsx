import React from 'react';
import  './css/navbar.css' // Import the CSS file with the styles

import { Search } from 'lucide-react';
import { useUserContext } from '../context/UserContext';
function Navbar() {

  const {state}=useUserContext();

  const userLogo=state.userId!==""?state?.userDetails?.firstname[0]:"R"

  
  return (
    <nav className="navbar">
      <div className="left">
        <div className="search-box">
          <input type="text" placeholder="Search blog" />
          <button><Search/></button>
        </div>
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="right">
        <div className="profile-icon">{userLogo.toUpperCase()}</div>
      </div>
    </nav>
  );
}

export default Navbar;
