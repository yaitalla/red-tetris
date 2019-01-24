import constants from '../constants';

const first = () => {
	const { shapes } = constants.shapes;
	const currentRand = Math.floor(Math.random() * 7);
	const nextRand = Math.floor(Math.random() * 7);
	const currentShape = shapes[currentRand];
	const nextShape = shapes[nextRand];

	return {
		type: 'FIRST',
		currentShape,
		nextShape,
	};
};

export default first;