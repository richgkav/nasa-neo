import {Asteroid} from './asteroid';
import {avg, twoDecPlaces} from './my-functions';
import {renderAsteroidData} from './render-data';
import {log} from './my-functions';

export function queryNeoApi(start, end, asteroidsArray) {
	
	const url = 'https://api.nasa.gov/neo/rest/v1/feed?';
	const key = 'eueuMFXBvagQGzpTAwu5yZr4OHH2TK5q6RECbwu0';
	let fetchString = url+'start_date='+start+'&end_date='+end+'&api_key='+key;

	fetch(fetchString, {
		mode: 'cors'
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
		fillAsteroidsArray(response, asteroidsArray);
		renderAsteroidData(asteroidsArray);
	});
}

// asteroidsArray is what is used to display the data
function fillAsteroidsArray(response, asteroidsArray) {
	
	//const asteroidsArray = [];

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
	log(response.element_count);
}
	
