import React from 'react'
import propTypes from 'prop-types'


function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes ={
    children: propTypes.node.isRequired,
    version: propTypes.string,
    type: propTypes.string,
    isDisabled: propTypes.bool,
}

export default Button