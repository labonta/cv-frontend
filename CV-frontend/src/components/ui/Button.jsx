import React from 'react'

function Button({children, onClick = null, className = ''}) {
  return (
    <button className={`cursor-pointer ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button