// eueuMFXBvagQGzpTAwu5yZr4OHH2TK5q6RECbwu0
// https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

import "./index.css";
import {Asteroid} from './asteroid';
import {format, add} from 'date-fns';

const main = function _main() {

	const dateFrom = '2020-07-01';
	const dateTo = '2020-07-08';

	let date = {
		from: new Date(dateFrom + ' 00:00:00'),
		to: new Date(dateTo + ' 23:59:59'),
	};

	let dateFromString = format(date.from, 'yyyy-MM-dd');
	let dateToString = format(date.to, 'yyyy-MM-dd');

	//log(dateFromString);
	//log(dateToString);

	// need to convert date to something nasa api will accept
	// yyyy-mm-dd

	let asteroidsArray = [];

	document.getElementById('title').innerText = 
	`Near Earth Object - Asteroid Approaches - ${dateFromString} to ${dateToString}`;
	
	const fetchQuery = createQuery(dateFromString, dateToString);
	
	fetch(fetchQuery, {
		mode: 'cors'
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
		log(response);
		asteroidsArray = fillAsteroidsArray(response);
		renderAsteroidData(asteroidsArray);
		log(typeof asteroidsArray[0].closeApproachVelocity);
	});
	
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
		let dateToString = format(date.to, 'yyyy-MM-dd');
		log(dateFromString);
		log(dateToString);
		log('changeWeek');
	}
	
	const addDateClickEvents = function _addDateClickEvents() {
		document.getElementById('prev-7').addEventListener('click', function() {
			changeWeek(-1);
		});

		document.getElementById('next-7').addEventListener('click', function () {
			changeWeek(1);
		});
	}

	addDateClickEvents();
	
	function createQuery(start, end) {
		const url = 'https://api.nasa.gov/neo/rest/v1/feed?';
		const key = 'eueuMFXBvagQGzpTAwu5yZr4OHH2TK5q6RECbwu0';
		return url+'start_date='+start+'&end_date='+end+'&api_key='+key;
	}
	
	// asteroidsArray is what is used to display the data
	function fillAsteroidsArray(response) {
		
		const asteroidsArray = [];

		// response object configuration
		/* 
		{
			'links':{},
			'element_count': number,
			'near_earth_objects': 
			{
				'date': 
				[
					{ asteroid },
					{ asteroid },
					...
				]
				'date': []
				...
			}
		}
		*/

		const neoObject = response.near_earth_objects;

		for (const eachDateArray in neoObject) {

			// get reference to the array of asteroids
			const asteroidDataArray = neoObject[eachDateArray];

			// iterate through each asteroid object in the array
			for (const singleAsteroidData in asteroidDataArray) {

				// get reference to asteroid
				const asteroidObject = asteroidDataArray[singleAsteroidData];

				// this just makes it a bit tidier
				const closeApproachData = asteroidObject.close_approach_data[0];

				// Creating an Asteroid object to make rendering easier.
				const asteroid = new Asteroid(
					asteroidObject.name,
					avg(asteroidObject.estimated_diameter.meters),
					asteroidObject.is_potentially_hazardous_asteroid,
					asteroidObject.nasa_jpl_url,
					closeApproachData.close_approach_date_full,
					twoDecPlaces(closeApproachData.miss_distance.kilometers),
					twoDecPlaces(closeApproachData.relative_velocity.kilometers_per_second)
				);
				asteroidsArray.push(asteroid);
				
			}
		}
		return asteroidsArray;
	}
	
	function sortArray(array, property, direction) {
		if (typeof property === 'number') {
			if (direction) {
				log('number');
				array.sort(function(a, b) {
					return a[property] - b[property];
				});
			}
			else {
				log('number');
				array.sort(function(a, b) {
					return b[property] - a[property];
				});		
			}
		}
		else if (typeof property === 'string') {
			if (direction) {
				log('string');
				array.sort(function(a, b) {
					if (a[property] < b[property]) return -1;
					if (a[property] > b[property]) return 1;
					return 0;
				});
			}
			else {
				log('string');	
				array.sort(function(a, b) {
					if (a[property] < b[property]) return 1;
					if (a[property] > b[property]) return -1;
					return 0;
				});
			}
		}
	}

	function renderAsteroidData(asteroidsArray) {

		log('renderAsteroidData called');
		const content = getContent();
		clearChildElements(content);

		asteroidsArray.forEach(asteroid => {

			const asteroidDiv = newDiv('asteroid');
			content.appendChild(asteroidDiv);

			// string in function call is used for 
			asteroidDiv.appendChild(renderAsteroidDataBox('name', asteroid.name));
			asteroidDiv.appendChild(renderAsteroidDataBox('diameter', asteroid.diameter));
			asteroidDiv.appendChild(renderAsteroidDataBox('hazard', asteroid.potentialHazard));
			asteroidDiv.appendChild(renderAsteroidLink('url', asteroid.urlNasa));
			asteroidDiv.appendChild(renderAsteroidDataBox('date', asteroid.closeApproachDateFull));
			asteroidDiv.appendChild(renderAsteroidDataBox('distance', asteroid.closeApproachDistance));
			asteroidDiv.appendChild(renderAsteroidDataBox('velocity', asteroid.closeApproachVelocity));

		});
	}
	
	// ---------------------------------------------------------------------------//
	
	function renderAsteroidDataBox(title, asteroidData) {

		const divs = renderDivs(title, asteroidData);

		divs.asteroidDataDiv.innerText = asteroidData;

		if (title === "hazard" && asteroidData === true) {
			divs.asteroidDataBox.classList.add('cell-highlight');
		}
		else if (title === "distance" && asteroidData < 384400) {
			divs.asteroidDataBox.classList.add('cell-highlight');
		}
		else if (title === "diameter" && asteroidData > 1000) {
			divs.asteroidDataBox.classList.add('cell-highlight');
		}
		else if (title === "velocity" && asteroidData > 25) {
			divs.asteroidDataBox.classList.add('cell-highlight');
		}

		return divs.asteroidDataBox;
	}
	
	function renderAsteroidLink(title, asteroidData) {
		const divs = renderDivs(title, asteroidData);
		divs.asteroidDataDiv.innerHTML = addLink(asteroidData, 'nasa url');
		return divs.asteroidDataBox;
	}
	
	function renderDivs(title, asteroidData) {
		const asteroidDataBox = newDiv('asteroid-databox')
		asteroidDataBox.classList.add('cell-colour');
		const asteroidDataDiv = newDiv('asteroid-data');
		asteroidDataBox.appendChild(asteroidDataDiv);
		return {asteroidDataBox, asteroidDataDiv};
	}

	const clearChildElements = function _clearChildElements(node) {
        // clears all child elements under the specified id
        while (node.firstChild) {
            node.removeChild(node.lastChild);
        }
    }
// ---------------------------------------------------------------------------//
	
	// log('average test = ' + avg({ '1':10, '2':20, '3':30 }));

	function avg(object) {

		let total = 0;
		let count = 0;

		for (const value in object) {
			total += object[value];
			count ++;
		}
		return twoDecPlaces(total/count);
	}
	
	function twoDecPlaces(value) {
		return parseFloat((Math.round((value)* 100)/100).toFixed(2));
	}

	function newDiv(className) {
		const newDiv = document.createElement('div');
		newDiv.classList.add(className);
		return newDiv;
	}

	function addLink(url, title) {
		return `<a href="${url}" target="_blank">${title}</a>`;
	}
	
	function newLine() {
		return `<br>`;
	}

	function getContent() {
		return getElement('content');
	}

	function getLog() {
		return getElement('log');
	}
	
	function getElement(id) {
		return document.getElementById(id);
	}
	
	function log(obj) {
		console.log(obj);
	}

}

window.onload = main;