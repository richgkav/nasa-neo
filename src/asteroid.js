	// use kilometers
	// diameter = {estimatedMin, estimatedMax}
	// closeApproach = {dateTime, missDistance, relVelocity (kps)}

export function Asteroid(
		name, 
		diameter, 
		potentialHazard, 
		urlNasa, 
		closeApproachDateFull,
		closeApproachDistance,
		closeApproachVelocity
	) {
	this.name = name;
	this.diameter = diameter;
	this.potentialHazard = potentialHazard;
	this.urlNasa = urlNasa;
	this.closeApproachDateFull = closeApproachDateFull;
	this.date = new Date(closeApproachDateFull);
	this.closeApproachDistance = closeApproachDistance;
	this.closeApproachVelocity = closeApproachVelocity;
}