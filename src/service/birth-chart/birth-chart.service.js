const { GeodeticLocation, HouseSystemType } = require("@goldenius/hades-js");
const moment = require('moment-timezone');
const birthChartUtil = require('../../util/birth-chart.util')

exports.generateBirthChart = function (generateBirthChartDTO) {

	const location = getGeodeticLocation(generateBirthChartDTO)
	const date = getMomentDate(generateBirthChartDTO);
	const timezone = generateBirthChartDTO.timezone;

	const celestialBodiesAndTime = birthChartUtil.calculateCelestialBodiesAndTime(date, timezone, location);
	const calculatedAspects = birthChartUtil.calculateAspects(celestialBodiesAndTime.CelestialBodies);
	const calculatedHouses = birthChartUtil.calculateHouseSystem(HouseSystemType.Placidus, date, timezone, location);

	return { celestialBodiesAndTime, calculatedAspects, calculatedHouses }
}

function getGeodeticLocation(dto) {
	return new GeodeticLocation(
		dto.latitude,
		dto.longitude
	)
}

function getMomentDate(dto) {
	return moment(`${dto.year}-${dto.month}-${dto.day} ${dto.hour}:${dto.minute}:00`)
}