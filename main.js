const buttonSubmitElement = document.getElementById("submit");
const buttonResetElement = document.getElementById("reset");
const frameElement = document.getElementById("frame");
const floorElement = document.getElementById("floor");
const roomElement = document.getElementById("room");
const dateElement = document.getElementById("date");
const intervalElement = document.getElementById("interval");
const commentElement = document.getElementById("comment");

frameElement.value = "";
floorElement.value = "";
roomElement.value = "";
dateElement.value = "";
intervalElement.value = "";
commentElement.value = "";

let list = [];

buttonSubmitElement.addEventListener("click", () => {
  list.push({
    frame: frameElement.value,
    floor: floorElement.value,
    room: roomElement.value,
    data: dateElement.value,
    interval: intervalElement.value,
    text: commentElement.value,
  });
  frameElement.value = "";
  floorElement.value = "";
  roomElement.value = "";
  dateElement.value = "";
  intervalElement.value = "";
  commentElement.value = "";
  console.log(list);
});

buttonResetElement.addEventListener("click", () => {
    frameElement.value = "";
    floorElement.value = "";
    roomElement.value = "";
    dateElement.value = "";
    intervalElement.value = "";
    commentElement.value = "";
  });
