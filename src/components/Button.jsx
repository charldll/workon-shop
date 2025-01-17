const Button = ({
	isActive,
	onClick,
	children
	}) => {
  return <button 
	style = {{backgroundColor: isActive ? "red" : undefined}} 
	onClick={onClick}
	>
		{children} 
		</button>
};

//shorter ver but different props:
// const Button = (props) => <button>{props.children}</button>

//nadpisuje style domyślne, używane raczej w wyątkach?
// onClick (i reszta eventów) może być w dowolnym miesjscu

export default Button;