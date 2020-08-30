import React from 'react'
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons'

function IconsSpaceBeteewn() {
  return (
    <>
      <div className="navbar-input-search__content">
        <div className="content-icons">
          <SearchOutlined className="site-form-item-icon" />
        </div>
      </div>
      <div className="navbar-input-search__content-right">
        <div className="content-icons">
          <CloseCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </div>
      </div>
    </>
  )
}

export default IconsSpaceBeteewn
