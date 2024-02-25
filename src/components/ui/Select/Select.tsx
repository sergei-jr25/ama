import { FC, useState } from 'react'
import styles from './Select.module.scss'
import { EnumProductSort } from './select-interface'

const CustomSelect: FC<{
	handleSorting: (option: EnumProductSort) => void
}> = ({ handleSorting }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = (option: EnumProductSort) => {
		setSelectedOption(option)
		handleSorting(option)
		setIsOpen(false)
	}

	return (
		<div className={styles.select} data-testid='select-test-id'>
			<h3
				className={`${styles.select__header}    ${
					isOpen ? styles.select__open : ''
				}    `}
				onClick={toggleDropdown}
			>
				{selectedOption ? selectedOption : 'Select an option'}
			</h3>
			{isOpen && (
				<ul className={styles.select__options} data-testid='select-list'>
					{Object.values(EnumProductSort).map(value => (
						<li
							data-testid='select-list-item'
							className={styles.select__option}
							key={value}
							onClick={() => handleOptionClick(value)}
						>
							{value}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default CustomSelect
