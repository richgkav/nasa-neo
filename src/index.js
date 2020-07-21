// eueuMFXBvagQGzpTAwu5yZr4OHH2TK5q6RECbwu0
// https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

import "./index.css";
import {Asteroid} from './asteroid';

const main = function _main() {

	//log('Running OK');
	//log({test1: 'test', test2: 'test2', test3: 'test3'});
	//log(createQuery('2020-07-01','2020-07-07'));
	
	const fetchQuery = createQuery('2020-07-01','2020-07-07');
	
	fetch(fetchQuery, {
		mode: 'cors'
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
		
		//log(response.element_count.toString() + ' asteroids');
		
		const allData = response.near_earth_objects;
		log(allData);
		const selectedData = pickData(allData);
		renderData(selectedData);
	});
	
	function createQuery(start, end) {
		const url = 'https://api.nasa.gov/neo/rest/v1/feed?';
		const key = 'eueuMFXBvagQGzpTAwu5yZr4OHH2TK5q6RECbwu0';
		return url+'start_date='+start+'&end_date='+end+'&api_key='+key;
	}
	
	function pickData(allData) {
		
		const asteroids = [];

		for (const date in allData) {
			const dateData = allData[date];

			for (const astData in dateData) {
				const astDataObj = dateData[astData];
				const asteroid = new Asteroid(
					astDataObj.name,
					avg(astDataObj.estimated_diameter.meters),
					astDataObj.is_potentially_hazardous_asteroid,
					astDataObj.nasa_jpl_url,
					astDataObj.close_approach_data[0].close_approach_date_full,
					twoDecPlaces(astDataObj.close_approach_data[0].miss_distance.kilometers),
					twoDecPlaces(astDataObj.close_approach_data[0].relative_velocity.kilometers_per_second)
				);
				asteroids.push(asteroid);
				//log(asteroid.date);
			}
		}

		asteroids.sort(function(a,b) {
			return a.date - b.date;
		});

		return asteroids;
	}

	function renderData(asteroids) {

		const content = getContent();

		asteroids.forEach(asteroid => {

			const asteroidDiv = newDiv('asteroid');
			content.appendChild(asteroidDiv);

			asteroidDiv.appendChild(renderAsteroidDataBox('Name', asteroid.name));
			asteroidDiv.appendChild(renderAsteroidDataBox('Diameter (meters)', asteroid.diameter));
			asteroidDiv.appendChild(renderAsteroidDataBox('Hazard?', asteroid.potentialHazard));
			asteroidDiv.appendChild(renderAsteroidLink('URL', asteroid.urlNasa));
			asteroidDiv.appendChild(renderAsteroidDataBox('Date of Close Approach', asteroid.closeApproachDateFull));
			asteroidDiv.appendChild(renderAsteroidDataBox('Distance (km)', asteroid.closeApproachDistance));
			asteroidDiv.appendChild(renderAsteroidDataBox('Velocity (m/s)', asteroid.closeApproachVelocity));

		});
	}
	
	// ---------------------------------------------------------------------------//
	
	function renderAsteroidDataBox(title, asteroidData) {
		
		const divs = renderAstDataBox(title, asteroidData);
		divs.asteroidDataDiv.innerText = asteroidData;
		divs.asteroidDataBox.appendChild(divs.asteroidTitleDiv);
		divs.asteroidDataBox.appendChild(divs.asteroidDataDiv);
		return divs.asteroidDataBox;
	}
	
	function renderAsteroidLink(title, asteroidData) {
		const divs = renderAstDataBox(title, asteroidData);
		divs.asteroidDataDiv.innerHTML = addLink(asteroidData, 'nasa url');
		divs.asteroidDataBox.appendChild(divs.asteroidTitleDiv);
		divs.asteroidDataBox.appendChild(divs.asteroidDataDiv);
		return divs.asteroidDataBox;
	}
	
	function renderAstDataBox(title, asteroidData) {
		const asteroidDataBox = newDiv('asteroid-databox')
		asteroidDataBox.classList.add('cell-colour');
		const asteroidTitleDiv = newDiv('asteroid-title');
		asteroidTitleDiv.innerText = title;
		const asteroidDataDiv = newDiv('asteroid-data');
		return {asteroidDataBox, asteroidTitleDiv, asteroidDataDiv};
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
		//return total / count;
	}
	
	function twoDecPlaces(value) {
		return (Math.round((value)* 100)/100).toFixed(2);
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
		if (typeof obj === 'string')
			getLog().innerText += obj + '\n';
		else
			console.log(obj);
	}

}

window.onload = main;