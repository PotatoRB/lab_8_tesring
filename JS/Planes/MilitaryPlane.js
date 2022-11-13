const Plane = require('./Plane');

class MilitaryPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryTypes) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._militaryTypes = militaryTypes;
    }

    getMilitaryType() {
        return this.militaryTypes;
    }

    setMilitaryType(value){
        this._militaryTypes = value;
    }  
}

module.exports = MilitaryPlane;