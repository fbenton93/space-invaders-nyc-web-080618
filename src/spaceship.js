class Spaceship {
  constructor(name,members,phaser,shield) {
    this.name = name;
    this.crew = members
    this.phasers = phaser
    this.shields = shield
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    if (!members.length) {
      this.docked = true
    } else {
      this.docked = false
      members.forEach( function (member){
        member.currentShip = this
      }.bind(this))
    }


  }
}
