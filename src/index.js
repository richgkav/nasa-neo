// eueuMFXBvagQGzpTAwu5yZr4OHH2TK5q6RECbwu0
// https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

import "./index.css";
import {format, add, startOfDay, addDays, endOfDay} from 'date-fns';
import {queryNeoApi} from './api-query';
import {renderAsteroidData, renderTitle} from './render-data'
import {log} from './my-functions';
import {sortArray} from './my-functions';

const main = function _main() {

	const _dateNow = new Date();
	const _sevenDaysTime = addDays(_dateNow, 7);

	let date = {
		from: startOfDay(_dateNow),
		to: endOfDay(_sevenDaysTime),
	};

	let dateFromString = format(date.from, 'yyyy-MM-dd');
	let dateToString = format(date.to, 'yyyy-MM-dd');

	let asteroidsArray = [];

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
}

window.onload = main;