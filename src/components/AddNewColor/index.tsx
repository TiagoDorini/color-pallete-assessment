import classes from './AddNewColor.module.css'

interface IAddNewColorProps {
	onSubmit: React.FormEventHandler<HTMLFormElement>
	selectedColor: string
	setSelectedColor: React.Dispatch<React.SetStateAction<string>>
}

const AddNewColor = ({ onSubmit, selectedColor, setSelectedColor }: IAddNewColorProps) => {
	const handleOnChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedColor(event.target.value)
	}

	return (
		<form className={classes.container} onSubmit={onSubmit} autoComplete={'off'}>
			<input
				pattern={'^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'}
				name='hex-input'
				type={'text'}
				value={selectedColor}
				onChange={handleOnChangeColor}
				required
				placeholder='#FF0011'
				className={classes.hexInput}
			/>
			<input
				className={classes.colorInput}
				name='color-input'
				type='color'
				value={selectedColor}
				placeholder='#FF0011'
				onChange={handleOnChangeColor}
				required
			/>
			<button
				className={classes.submitBtn}
				disabled={!selectedColor.length}
				type='submit'
			>
				Add
			</button>
		</form>
	)
}

export default AddNewColor
