import classes from './ColorItem.module.css'

interface IColorItemProps {
	selectedColor: string
	setSelectedColor: React.Dispatch<React.SetStateAction<string>>
}

const ColorItem = ({ selectedColor, setSelectedColor }: IColorItemProps) => {
	return (
		<div className={classes.container} onClick={() => setSelectedColor(selectedColor)}>
			<div className={classes.colorDisplay} style={{ backgroundColor: selectedColor }} />
			<div className={classes.hexColorDisplay}>{selectedColor}</div>
		</div>
	)
}

export default ColorItem
