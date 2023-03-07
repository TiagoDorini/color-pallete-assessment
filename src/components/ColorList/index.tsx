import { ColorListType } from '../../types/ColorListType'
import ColorItem from './ColorItem'
import classes from './ColorList.module.css'

interface IColorListProps {
	colorList: ColorListType[]
	setSelectedColor: React.Dispatch<React.SetStateAction<string>>
}

const ColorList = ({ colorList, setSelectedColor }: IColorListProps) => {
	if (!colorList.length) return <p>No colors to display!</p>
	return (
		<div className={classes.container}>
			{!!colorList &&
				colorList.map((item) => (
					<ColorItem setSelectedColor={setSelectedColor} key={item.colorValue} selectedColor={item.colorValue} />
				))}
		</div>
	)
}

export default ColorList
