class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.gif'; // Set the image
    this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0;
  }

  updateOneTick() {
    let delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult));
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);
  }


  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge;
  }
}
