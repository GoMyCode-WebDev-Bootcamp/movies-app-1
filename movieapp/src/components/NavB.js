import React from 'react' 
import Navbar from 'react-bootstrap/Navbar';


function NavB() {
  return (
    
    <Navbar className="Navstyle d-f">
  <div className="d-f" style={{ width: '100%' }}>
    <h3 style={{ fontSize:'32px' }}>Movio</h3>
    <nav className=" nav-links">
      <a href="#">Home</a>
      <a href="#">Movie</a>
      <a href="#">Serie</a>
    </nav>
  </div>
</Navbar>
    
  )
}

export default NavB