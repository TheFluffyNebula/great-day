import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  // pass in the function to call (it's just a parameter, the name can be different)
  return <div className='center'>
    <button onClick={onClick} 
      style={{ backgroundColor: color }}
      className='btn'>
      {text}
    </button>
  </div>
}

// Button.defaultProps = { // not needed
//     color: 'steelblue'
// }

Button.propTypes = { // type checker for robust program
    text: PropTypes.string, 
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
// goal: make random color each time it's clicked
// Math.floor(Math.random() * 10);