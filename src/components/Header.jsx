import propTypes from 'prop-types';

function Header({ text , bgColor, textColor}) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor
    }

  return (
    <header style={headerStyle}>
        <div className="contaiter"></div>
        <h1>{ text }</h1>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feadback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}
Header.propTypes={
    text: propTypes.string,
    bgColor: propTypes.string,
    textColor: propTypes.string,
}
export default Header