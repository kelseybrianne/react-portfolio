

const Button = ({ toggleTheme, theme }) => {
  return (
    <button onClick={toggleTheme}>{theme === 'Light' ? 'Light' : 'Dark'}</button>
  )
}

export default Button
