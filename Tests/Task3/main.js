function Plane() {}
Plane.prototype.takeoff = function takeoff(callback) {
  setTimeout(function() {
    callback();
    console.log('Took off');
  }, 600);
};
Plane.prototype.closeChassis = function closeChassis(callback) {
  setTimeout(function() {
    callback();
    console.log('Chassis closed');
  }, 1000);
};
Plane.prototype.turnOnAutoPilot = function turnOnAutoPilot(callback) {
  setTimeout(function() {
    callback();
    console.log('Autopilot turned on');
  }, 750);
};
Plane.prototype.flyToDestination = function flyToDestination(callback) {
  setTimeout(function() {
    callback();
    console.log('Flown to destination');
  }, 2000);
};
Plane.prototype.openChassis = function openChassis(callback) {
  setTimeout(function() {
    callback();
    console.log('Chassis open');
  }, 500);
};
Plane.prototype.land = function land(callback) {
  setTimeout(function() {
    callback();
    console.log('Landed');
  }, 3000);
};

// START ADD YOUR CODE HERE

var plane = new Plane();

// END ADD YOUR CODE HERE

plane.takeoff = function() {
  Plane.prototype.takeoff(function() {
    Plane.prototype.closeChassis(function() {
      Plane.prototype.turnOnAutoPilot(function() {
        Plane.prototype.flyToDestination(function() {
          Plane.prototype.openChassis(function() {
            Plane.prototype.land(function() {});
          });
        });
      });
    });
  });
  return this;
};
plane.closeChassis = function() {
  return this;
};
plane.turnOnAutoPilot = function() {
  return this;
};
plane.flyToDestination = function() {
  return this;
};
plane.openChassis = function() {
  return this;
};
plane.land = function() {
  return this;
};


console.log("Expected Output:");
console.log("Took off");
console.log("Chassis closed");
console.log("Autopilot turned on");
console.log("Flown to destination");
console.log("Chassis open");
console.log("Landed");
console.log("\n\nActual Output:");

plane.takeoff().closeChassis().turnOnAutoPilot().flyToDestination().openChassis().land();
