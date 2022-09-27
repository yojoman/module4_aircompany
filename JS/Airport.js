const PassengerPlane = require("./planes/passengerPlane");
const MilitaryPlane = require("./planes/militaryPlane");
const ExperimentalPlane = require("./planes/experimentalPlane");
const militaryType = require("./models/militaryType");

class Airport {
  constructor(planes) {
    this.planes = planes;
  }

  getPassengerPlanes() {
    let passengerPlanes = [];
    for (let plane of this.planes) {
      if (plane instanceof PassengerPlane) {
        passengerPlanes.push(plane);
      }
    }
    return passengerPlanes;
  }

  getMilitaryPlanes() {
    let militaryPlanes = [];
    this.planes.forEach((plane) => {
      if (plane instanceof MilitaryPlane) {
        militaryPlanes.push(plane);
      }
    });
    return militaryPlanes;
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    let passengerPlanes = this.getPassengerPlanes();
    let planeWithMaxCapacity = passengerPlanes[0];
    for (let element of passengerPlanes) {
      if (
        element.getPassengersCapacity() >
        planeWithMaxCapacity.getPassengersCapacity()
      ) {
        planeWithMaxCapacity = element;
      }
    }
    return planeWithMaxCapacity;
  }

  getTransportMilitaryPlanes() {
    let transportMilitaryPlanes = [];
    let militaryPlanes = this.getMilitaryPlanes();
    for (let element of militaryPlanes) {
      if (element.getMilitaryType() == militaryType.TYPE_TRANSPORT) {
        transportMilitaryPlanes.push(element);
      }
    }
    return transportMilitaryPlanes;
  }

  getBomberMilitaryPlanes() {
    let bomberMilitaryPlanes = [];
    let militaryPlanes = this.getMilitaryPlanes();
    for (let element of militaryPlanes) {
      if (element.getMilitaryType() === militaryType.BOMBER) {
        bomberMilitaryPlanes.push(element);
      }
    }
    return bomberMilitaryPlanes;
  }

  getExperimentalPlanes() {
    let experimentalPlanes = [];
    this.planes.forEach((plane) => {
      if (plane instanceof ExperimentalPlane) {
        experimentalPlanes.push(plane);
      }
    });
    return experimentalPlanes;
  }

  sortByMaxDistance() {
    this.planes.sort(
      (a, b) => a.getMaxFlightDistance() - b.getMaxFlightDistance()
    );
    return this;
  }

  sortByMaxSpeed() {
    this.planes.sort((a, b) => a.getMaxSpeed() - b.getMaxSpeed());
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort((a, b) => a.getMaxLoadCapacity() - b.getMaxLoadCapacity());
    return this;
  }

  getPlanes() {
    return this.planes;
  }

  static print(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = Airport;
