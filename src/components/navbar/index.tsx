import React from 'react'
import InputSearch from './defaults/inputSearch'
import logoInstagram from '../../assets/images/logo.png'
import MenuIcons from './defaults/menuIcons'

/*
const NavbarStyled = styled.div`
  color: black;
  .narbar-content{
    display: flex;
    justify-content: space-between;
  }
`;
*/

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container-items">
        <div className="item-logo">
          <img src={logoInstagram} alt="logo" />
        </div>
        <div className="navbar-input">
          <InputSearch />
        </div>
        <div>
          <MenuIcons />
        </div>
      </div>
    </div>
  )
}
export default Navbar
