var floorCount = 10; //floor count
var speed = 0.5; //second

var control = document.getElementById("control");
for (let index = 1; index < floorCount + 1; index++) {
    var button = document.createElement("button");
    control.appendChild(button);
    button.innerHTML = index;
    button.setAttribute("onClick", "go(this.id)");
    button.id = "b" + index;
}
var building = document.getElementById("building");
for (let index = floorCount; index >= 1; index--) {
    var floor = document.createElement("div");
    building.appendChild(floor);
    floor.classList.add("floor");
    floor.id = "floor" + index;
    floor.innerHTML = index;
}
document.getElementById("floor1").classList.add("lift");
var lift = document.getElementsByClassName("lift");
async function go(id) {
    var destination = parseInt(id.substring(1));
    var currentLiftFloor = parseInt(lift[0].id.substring(5));
    if (currentLiftFloor < destination) {
        for (let index = currentLiftFloor; index < destination; index++) {
            var currentFloor = document.getElementById("floor" + index);
            var destinationFloor = document.getElementById(
                "floor" + (index + 1)
            );
            currentFloor.classList.remove("lift");
            destinationFloor.classList.add("lift");
            console.log(index);
            await sleep(speed * 1000);
        }
    } else {
        for (let index = currentLiftFloor; index > destination; index--) {
            var currentFloor = document.getElementById("floor" + index);
            var destinationFloor = document.getElementById(
                "floor" + (index - 1)
            );
            currentFloor.classList.remove("lift");
            destinationFloor.classList.add("lift");
            console.log(index);
            await sleep(speed * 1000);
        }
    }
}

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};
