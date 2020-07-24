import {log} from './my-functions';

export function renderAsteroidData(asteroidsArray) {
	
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

export function renderTitle(from, to) {
	document.getElementById('title').innerText = `Near Earth Object - Asteroid Approaches - ${from} to ${to}`;

}