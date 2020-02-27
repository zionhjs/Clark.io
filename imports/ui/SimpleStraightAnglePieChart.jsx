import React, { Component } from 'react';
import { fade, lighten, darken } from 'material-ui/utils/colorManipulator';
import {PieChart, Pie, Legend, Tooltip} from 'Recharts';

const style = {
	top: 116,
	left: 365,
	lineHeight: '24px'
};

const chartStyle = {
  top: -45,
  left: 0
};


export default class SimpleStraightAnglePieChart extends Component {
	constructor(props) {
		super(props);

		const brandColors = this.props.colors;
		let gold = brandColors.gold,
			blue = brandColors.blue,
			teal = brandColors.teal,
			whiteWash = brandColors.whiteWash,
			denim = brandColors.denim,
			gunmetal = brandColors.gunmetal,
			denimLighter = brandColors.denimLighter,
			blueLight = lighten(brandColors.blue, 0.33);


		this.data = [
			{zoneid: 'Zone 1', sold: 10458, percent: 25.1, name: "Living Room & Entertainment", fill: denim},
			{zoneid: 'Zone 2', sold: 4605, percent: 11.0, name: "Accessories", fill: blue},
			{zoneid: 'Zone 6', sold: 18419, percent: 44.2, name: "Office & Workspace", fill: teal},
			{zoneid: 'Zone 3', sold: 2203, percent: 5.2, name: "Kitchen & Dining", fill: blueLight},
			{zoneid: 'Zone 4', sold: 4048, percent: 9.7, name: "Bedroom", fill: gold},
			{zoneid: 'Zone 5', sold: 1975, percent: 4.7, name: "Outdoor & Garden", fill: gunmetal},
		];
	}
	render () {
  	return (
    	<PieChart width={600} height={300}  style={chartStyle}>
        <Legend iconSize={10} width={200} height={90} layout='horizontal' verticalAlign='bottom' align="right" wrapperStyle={style}/>
        <Pie stroke={this.props.colors.background} startAngle={0} endAngle={360} dataKey='sold' data={this.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label={(name)=>`$${name.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}/>
     </PieChart>
    );
  }
}
