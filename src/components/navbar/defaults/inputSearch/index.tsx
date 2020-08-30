import React, { useState } from 'react'
import IconsSpaceBeteewn from './iconsSpaceBeteewn'
import IconsCenter from './iconsCenter'

function InputSearch() {
  const [focus, setFocus] = useState(false)

  return (
    <div className="navbar-input-search">
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="Buscar"
        className={
          'ant-input ' + (focus ? 'input-search' : 'input-search-center')
        }
        type="text"
      />
      {focus && <IconsSpaceBeteewn />}
      {!focus && <IconsCenter />}
    </div>
  )
}

export default InputSearch
