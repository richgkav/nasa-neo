
// log('average test = ' + avg({ '1':10, '2':20, '3':30 }));

export function avg(object) {

	let total = 0;
	let count = 0;

	for (const value in object) {
		total += object[value];
		count ++;
	}
	return twoDecPlaces(total/count);
}

export function twoDecPlaces(value) {
	return parseFloat((Math.round((value)* 100)/100).toFixed(2));
}

export function log(obj) {
	console.log(obj);
}

export function sortArray(array, property, direction) {
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