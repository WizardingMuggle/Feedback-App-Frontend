import PropTypes from 'prop-types'


function Button({children , version, isDisabled, type}) {
  return (
    <button type={type} disabled={isDisabled} className ={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps =
{
isDisabled: false,
version: 'primary',
type: 'button',
}

Button.propTypes=
{
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}


export default Button
