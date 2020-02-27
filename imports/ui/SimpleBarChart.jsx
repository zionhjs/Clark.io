import React, { Component, PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from 'Recharts';
import d3 from 'd3';

var tooltipStyle = {
	color: '#000',
	lineHeight: '10px'
};

var tooltipWrapStyle = {
	backgroundColor: "rgba(0,0,0,0.1)",
	borderRadius: '3px',
	padding: '10px'
};

const CustomTooltip = React.createClass({
	propTypes: {
		type: PropTypes.string,
		payload: PropTypes.array,
		label: PropTypes.number,
	},


	render() {
		const { active } = this.props;

		if (active) {
			const { payload, label } = this.props;
			return (
				<div className="custom-tooltip" styles={tooltipWrapStyle}>
					<p className="desc" style={tooltipStyle}>{`${payload[0].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`} Visitors </p>
					<p className="desc" style={tooltipStyle}>${`${payload[1].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`} Sold</p>
				</div>
			);
		}

		return null;
	}
});

const style = {
	top: 6,
	left: 350,
	lineHeight: '24px'
};

const chartStyle = {
	top: 0,
	fontSize: '11px',

};

export default class SimpleBarChart extends Component {
	constructor(props) {
		super(props);
		let brandColors = this.props.colors;
		let yellow = brandColors.yellow,
			blue = brandColors.blue,
			teal = brandColors.teal,
			whiteWash = brandColors.whiteWash,
			denim = brandColors.denim,
			gunmetal = brandColors.gunmetal;

		var i = d3.interpolate({ colors: [yellow, blue] }, { colors: [blue, teal] });

		{/*coloring for graph*/ }
		const seed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
		const colors = seed.map((x) => {
			return i(x / 6.7).colors[0];
		})


		var totalSold = 41708;


		this.data = [
			{ name: '6-7am', visitors: 4000, sold: 2400, acv: 2400 },
			{ name: '7-8am', visitors: 3000, sold: 1398, acv: 2210 },
			{ name: '8-9am', visitors: 2000, sold: 9800, acv: 2290 },
			{ name: '9-10am', visitors: 2780, sold: 3908, acv: 2000 },
			{ name: '10-11am', visitors: 1890, sold: 4800, acv: 2181 },
			{ name: '11-12pm', visitors: 2390, sold: 3800, acv: 2500 },
			{ name: '12-1pm', visitors: 1777, sold: 4300, acv: 2100 },
			{ name: '1-2pm', visitors: 2355, sold: 4300, acv: 2100 },
			{ name: '2-3pm', visitors: 3500, sold: 4300, acv: 2100 },
			{ name: '3-4pm', visitors: 4003, sold: 4300, acv: 2100 },
			{ name: '4-5pm', visitors: 4332, sold: 4300, acv: 2100 },
			{ name: '5-6pm', visitors: 5078, sold: 4300, acv: 2100 }

		];
	}
	render() {
		return (
			<BarChart width={550} height={300} barSize={8} data={this.data} style={chartStyle}>
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip content={<CustomTooltip />} />
				<Bar dataKey="visitors" fill={this.props.colors.blue} />
				<Bar dataKey="sold" fill={this.props.colors.teal} />
			</BarChart>
		);
	}
}
