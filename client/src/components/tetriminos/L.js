import React, { PropTypes} from 'react';
import { Layer, Stage, Rect } from 'react-konva';
const { gridHeight, gridWidth, block } = constants;
import constants from '../../constants';
import {connect} from 'react-redux';
import { fall } from '../../actions';

const test = (event) => {
	console.log(event.keyCode, window.location.pathname, store.getState().fall)
	const data = {
		X: store.getState().fall.X,
		Y: store.getState().fall.Y
	}
	fall({data});
	store.subscribe(() => {
		console.log('ici')
	})
}

window.addEventListener('keydown', test);


const L = (props) => 
	<Layer>
            <Rect width={block} height={block}
				x={props.X} y={props.Y} fill={'#6de879'} key={1}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={props.X} y={props.Y+30} fill={'#6de879'} key={2}
				stroke="black" strokeWidth={4}
			/>
			<Rect width={block} height={block}
				x={props.X} y={props.Y+60} fill={'#6de879'} key={3}
				stroke="black" strokeWidth={4}
			/>
            <Rect width={block} height={block}
				x={props.X+30} y={props.Y+60} fill={'#6de879'} key={4}
				stroke="black" strokeWidth={4}
			/>
	</Layer>


const mapStateToProps = (state) => ({
	X: state.fall.X,
	Y: state.fall.Y
})


export default connect(mapStateToProps, { fall })(L);