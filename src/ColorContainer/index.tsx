import { useEffect, useState } from 'react'
import AddNewColor from '../components/AddNewColor'
import ColorList from '../components/ColorList'
import ErrorMessage from '../components/ErrorMessage'
import { ColorListType } from '../types/ColorListType'
import classes from './ColorContainer.module.css'

const ColorContainer = () => {
	const [selectedColor, setSelectedColor] = useState('#FFFFFF')
	const [colorList, setColorList] = useState<ColorListType[]>([])
	const [textColor, setTextColor] = useState('')
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

	const isColorTooDark = () => {
		var r = parseInt(selectedColor.slice(1, 3), 16)
		var g = parseInt(selectedColor.slice(3, 5), 16)
		var b = parseInt(selectedColor.slice(5, 7), 16)
		var brightness = (r * 299 + g * 587 + b * 114) / 1000
		if (brightness >= 128) return true
		return false
	}

	useEffect(() => {
		if (isColorTooDark()) {
			setTextColor('black')
		} else {
			setTextColor('white')
		}
	}, [selectedColor])

	return (
		<div className={classes.container}>
			<div className={classes.inputContainer}>
				<AddNewColor onSubmit={handleAddNewColor} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
				{hasError && <ErrorMessage>This color has already been selected</ErrorMessage>}
				{!selectedColor && <ErrorMessage>Please pick a color!</ErrorMessage>}
			</div>
			<div className={classes.colorBox}>
				<div className={classes.savedColorsLabel}>Used Colors</div>
				<ColorList colorList={colorList} setSelectedColor={setSelectedColor} />
			</div>
			{!!selectedColor && selectedColor.length === 7 && (
				<div className={classes.previewContainer} style={{ color: textColor }}>
					<p className={classes.previewLabel}>Preview</p>
					<div className={classes.previewDiv} style={{ backgroundColor: selectedColor }}>
						<p>{selectedColor}</p>
					</div>
					<div className={classes.previewComponents}>
						<button className={classes.previewButton} style={{ backgroundColor: selectedColor, color: textColor }}>
							Button Example
						</button>
						<table className={classes.previewTable} style={{ backgroundColor: selectedColor }}>
							<tr>
								<th>Company</th>
								<th>Contact</th>
								<th>Country</th>
							</tr>
							<tr>
								<td>Alfreds Futterkiste</td>
								<td>Maria Anders</td>
								<td>Germany</td>
							</tr>
							<tr>
								<td>Centro comercial Moctezuma</td>
								<td>Francisco Chang</td>
								<td>Mexico</td>
							</tr>
							<tr>
								<td>Alfreds Futterkiste</td>
								<td>Maria Anders</td>
								<td>Germany</td>
							</tr>
							<tr>
								<td>Centro comercial Moctezuma</td>
								<td>Francisco Chang</td>
								<td>Mexico</td>
							</tr>
							<tr>
								<td>Alfreds Futterkiste</td>
								<td>Maria Anders</td>
								<td>Germany</td>
							</tr>
							<tr>
								<td>Centro comercial Moctezuma</td>
								<td>Francisco Chang</td>
								<td>Mexico</td>
							</tr>
						</table>
					</div>
				</div>
			)}
		</div>
	)
}

export default ColorContainer
