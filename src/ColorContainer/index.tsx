import { useState } from 'react'
import AddNewColor from '../components/AddNewColor'
import ColorList from '../components/ColorList'
import { ColorListType } from '../types/ColorListType'
import classes from './ColorContainer.module.css'

const ColorContainer = () => {
	const [selectedColor, setSelectedColor] = useState('#FFFFFF')
	const [colorList, setColorList] = useState<ColorListType[]>([])
	const [hasError, setHasError] = useState(false)

	const handleAddNewColor = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (colorList.find((item) => item.colorValue.toUpperCase() === selectedColor.toUpperCase())) {
			setHasError(true)
		} else {
			setHasError(false)
			setColorList((list) => [...list, { colorValue: selectedColor }])
		}
	}

	return (
		<div className={classes.container}>
			<div className={classes.inputContainer}>
				<AddNewColor onSubmit={handleAddNewColor} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
				{hasError && <span style={{ color: '#c20000' }}>This color has already been selected</span>}
				{!selectedColor && <span style={{ color: '#c20000' }}>Please pick a color!</span>}
			</div>
			<div className={classes.colorBox}>
				<div className={classes.savedColorsLabel}>Used Colors</div>
				<ColorList colorList={colorList} setSelectedColor={setSelectedColor} />
			</div>
			{!!selectedColor && selectedColor.length === 7 && (
				<div className={classes.previewContainer}>
					<p className={classes.previewLabel}>Preview</p>
					<div className={classes.previewDiv} style={{ backgroundColor: selectedColor }} />
				</div>
			)}
		</div>
	)
}

export default ColorContainer
