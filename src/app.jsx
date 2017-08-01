import React, { Component } from 'react';
import ReactDOM from 'react-dom';


/**
 * Component: Slider
 */
var Slider = React.createClass({

	render: function() {

		return (
			<input type="range" value="0" id="slider" />
		)
	}
});

const root = document.querySelector( '#root' ); // declare #root as constant
ReactDOM.render( <Slider />, root ); // render our App