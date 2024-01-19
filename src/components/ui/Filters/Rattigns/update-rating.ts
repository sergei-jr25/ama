export const updateRating = (currentRatting: string, newRatng: string) => {
	const rattingArray = currentRatting ? String(currentRatting).split('|') : []

	const currentIndex = rattingArray.indexOf(newRatng)

	if (currentIndex === -1) {
		rattingArray.push(newRatng)
	} else {
		rattingArray.splice(currentIndex, 1)
	}

	return rattingArray.join('|')
}
