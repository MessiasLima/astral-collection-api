const {
    AstrologyService,
    AspectService,
    EphemerisJSONRepository,
    OrbJSONRepository,
    TrigonometricUtilities,
    HouseSystemFactory,
    TimeConversions,
    WorldTimezoneRepository,
    ZodiacFactory,
    GeodeticLocation,
    HouseSystemType,
    RetrogradesService
} = require("@goldenius/hades-js");
const moment = require('moment-timezone');

const timeConversions = new TimeConversions();
const retrogradesService = new RetrogradesService();
const ephemerisJSONRepository = new EphemerisJSONRepository(timeConversions, retrogradesService);
const worldTimezoneRepository = new WorldTimezoneRepository();
const orbRepository = new OrbJSONRepository();
const aspectService = new AspectService(orbRepository);
const trigonometricUtilities = new TrigonometricUtilities();
const zodiacFactory = new ZodiacFactory();
const houseSystemFactory = new HouseSystemFactory(trigonometricUtilities, zodiacFactory);


const astrologyService = new AstrologyService(ephemerisJSONRepository,
    timeConversions,
    worldTimezoneRepository,
    aspectService,
    houseSystemFactory
);

exports.calculateCelestialBodiesAndTime = function (date, timezone, location) {
    return astrologyService.CalculateCelestialBodiesAndTime(date, timezone, location);
}

exports.calculateAspects = function (celestialBodies) {
    return astrologyService.CalculateAspects(celestialBodies);
}

exports.calculateHouseSystem = function (houseSystemType, date, timezone, location) {
    return astrologyService.CalculateHouseSystem(houseSystemType, date, timezone, location);
}