import classes from './ErrorMessage.module.css'

interface IErrorMessageProps extends React.HTMLProps<HTMLSpanElement> {}

const ErrorMessage = ({children, ...props}: IErrorMessageProps) => {
	return <span {...props} className={classes.errorMessage}>{children}</span>
}

export default ErrorMessage