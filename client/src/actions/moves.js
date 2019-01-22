export const right = () => ({
	type: RIGHT,
});
export const left = () => ({
	type: LEFT,
});
export const down = () => ({
	type: DOWN,
});

export const move = (way) => {
	(dispatch) => {
		switch(way) {
			case 'left':
				dispatch(left());
				return;
			case 'rigth':
				dispatch(right());
				return;
			case 'down':
				dispatch(down());
				return;
			default:
				return;
		}
	}
}
