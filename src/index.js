// eueuMFXBvagQGzpTAwu5yZr4OHH2TK5q6RECbwu0
// https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

import "./index.css";
import {format, add} from 'date-fns';
import {queryNeoApi} from './api-query';
import {renderAsteroidData} from './render-data'
import {log} from './my-functions';
import {renderTitle} from './render-data';

const main = function _main() {

	let dateFromString = '2020-07-01';
	let dateToString = '2020-07-08';

	let asteroidsArray = [];

	let date = {
		from: new Date(dateFromString + ' 00:00:00'),
		to: new Date(dateToString + ' 23:59:59'),
	};

	renderTitle(dateFromString, dateToString);
	queryNeoApi(dateFromString, dateToString, asteroidsArray);

	// true doesn't mean a specific direction it's just a flip-flop flag
	let sortDirection = {
		name: true,
		diameter: true,
		hazard: true,
		date: true,
		distance: true,
		velocity: true,
	};
	
	//addSortClickEvents();
	newAddSortClickEvents('ast-name', sortDirection.name, 'name');
	newAddSortClickEvents('ast-diameter', sortDirection.diameter, 'diameter');
	newAddSortClickEvents('ast-hazard', sortDirection.potentialHazard, 'potentialHazard');
	newAddSortClickEvents('ast-date', sortDirection.date, 'date');
	newAddSortClickEvents('ast-distance', sortDirection.closeApproachDistance, 'closeApproachDistance');
	newAddSortClickEvents('ast-velocity', sortDirection.closeApproachVelocity, 'closeApproachVelocity');
	
	// add click events to css title div to sort array data by that column
	function newAddSortClickEvents(cssIdName, sortDirectionProp, arrayProp) {
		
		document.getElementById(cssIdName).addEventListener('click', () => {
			if (sortDirectionProp === true) {
				sortArray(asteroidsArray, arrayProp, true);
				sortDirectionProp = false;	// flip the direction for next sort
			}
			else {
				sortArray(asteroidsArray, arrayProp, false);
				sortDirectionProp = true;
			}
			renderAsteroidData(asteroidsArray);
		});

	}
	
	const changeWeek = function _changeWeek(value) {
		date.from = add(date.from, {weeks: value});
		date.to = add(date.to, {weeks: value});
		dateFromString = format(date.from, 'yyyy-MM-dd');
		dateToString = format(date.to, 'yyyy-MM-dd');
	}
	
	const addDateClickEvents = function _addDateClickEvents() {
		document.getElementById('prev-7').addEventListener('click', function() {
			changeWeek(-1);
			asteroidsArray = [];
			queryNeoApi(dateFromString, dateToString, asteroidsArray);
			renderTitle(dateFromString, dateToString);
		});

		document.getElementById('next-7').addEventListener('click', function () {
			changeWeek(1);
			asteroidsArray = [];
			queryNeoApi(dateFromString, dateToString, asteroidsArray);
			renderTitle(dateFromString, dateToString);
		});
	}

	addDateClickEvents();
		

	function sortArray(array, property, direction) {
		if (typeof property === 'number') {
			if (direction) {
				array.sort(function(a, b) {
					return a[property] - b[property];
				});
			}
			else {
				array.sort(function(a, b) {
					return b[property] - a[property];
				});		
			}
		}
		else if (typeof property === 'string') {
			if (direction) {
				array.sort(function(a, b) {
					if (a[property] < b[property]) return -1;
					if (a[property] > b[property]) return 1;
					return 0;
				});
			}
			else {
				array.sort(function(a, b) {
					if (a[property] < b[property]) return 1;
					if (a[property] > b[property]) return -1;
					return 0;
				});
			}
		}
	}
	
	// ---------------------------------------------------------------------------//
	
// ---------------------------------------------------------------------------//

	


}

window.onload = main;