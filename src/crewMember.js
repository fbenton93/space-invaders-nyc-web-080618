class CrewMember {
  constructor(position,ship="Looking for a Rig") {
    this.position = position
    this.currentShip = ship
  }
  setShip(ship) {
    this.currentShip = ship
  }

  engageWarpDrive() {
    if (this.currentShip == "Looking for a Rig") {
      return "had no effect"
    } else {
      if (this.position == "Pilot") {
        this.currentShip.warpDrive = "engaged"
      }
    }
  }
  chargePhasers() {
    if (this.currentShip == "Looking for a Rig") {
      return "had no effect"
    } else {
      if (this.position == "Gunner") {
        this.currentShip.phasersCharge = "charged"
      }
    }
  }
  setsInvisibility() {
    if (this.currentShip == "Looking for a Rig") {
      return "had no effect"
    } else {
      if (this.position == "Defender") {
        this.currentShip.cloaked = true
      }
    }
  }

}
