import React from 'react'
import { Input, Tooltip } from 'antd'
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons'
import InputSearch from './defaults/inputSearch'

import logoInstagram from '../../assets/images/logo.png'

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
        <div>
          <InputSearch />
        </div>
        <div>icons</div>
      </div>
    </div>
  )
}
export default Navbar
