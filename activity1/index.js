// 1. DISPLAY NAME
// Click the button to display your name in the box
// (Tip: in this example, you will hard code your name within the JavaScript function, rather than use the input box to grab it).

// Selectors
let btnName = document.querySelector("#btnName");
let myName = document.querySelector("#myName");
// Function
function showName() {
  myName.value = 'Elias!';
};
// Call the event
btnName.addEventListener("click", showName);

// 2. LIGHTSWITCH
// Switch lights on mouseover
// When the mouse cursor is on the lightbulb image, the lighton image should show; and revert back to the lightoff image when the mouse moves off.

// Selectors
let imageOff = document.querySelector("#imageOff");

// Function
function imgChange(){
  imageOff.src = "images/lighton.png"
}
// Call the event
imageOff.addEventListener("mouseover", imgChange);

// 3. Double click button to display content
// Selectors
let displayPara = document.querySelector('#displayPara');
let btndbName = document.querySelector('#btndbName');

function showScaryContent() {
  displayPara.style.paddingTop = '15px';
  displayPara.style.fontSize = '28px';
  displayPara.innerHTML = '&#9760 &#9760 &#9760';
}

// Call the event
btndbName.addEventListener('dblclick', showScaryContent);
// 4. Traffic Lights
// Selectors
let btnStop = document.querySelector('#btnStop');
let btnReady = document.querySelector('#btnReady');
let btnGo = document.querySelector('#btnGo');

let stopDiv = document.querySelector('#stopDiv');
let readyDiv = document.querySelector('#readyDiv');
let goDiv = document.querySelector('#goDiv');
// Function 1
function stop(){
  stopDiv.style.backgroundColor = 'red';
};
function ready(){
  readyDiv.style.backgroundColor = 'orange';
};
function go(){
  goDiv.style.backgroundColor = 'green';

};

// Call the events
btnStop.addEventListener('click', stop);
btnReady.addEventListener('click', ready);
btnGo.addEventListener('click', go);


// 5. Change textbox border colours
// Selectors
let firstNameInput = document.querySelector('#firstName');
let lastNameInput = document.querySelector('#lastName');
let btn2Name = document.querySelector('#btn2Name');
// Function
function colorChange(){
  firstNameInput.style.border = '3px groove #f82e1a';
  lastNameInput.style.border = '3px ridge #ca14ea';
};
// Call the event
btn2Name.addEventListener('click', colorChange)
// 6. Validate the input [length should be more than 5 characters]
// Selectors
let errMsg = document.querySelector('#errMsg');
let myName2 = document.querySelector('#myName2');
let btnSub2 = document.querySelector('#btnSub2');

function validateBox(){
  if(!myName2.value || myName2.value.length <= 5) {
    myName2.style.border = '1px solid red';
    errMsg.innerText = 'Enter 8+ letter word!';
  }
}
// Call the event
btnSub2.addEventListener('click', validateBox);


// 7.create a list of hobbies
// Selectors
let hobbiesUL = document.querySelector('#hobbies > ul');
let btnHobbies = document.querySelector('#btnHobbies');

function getHobbies(){
  for (i = 1; i <= 3; i++) {
    let hobby = prompt("Enter a hobby");
    let listItem = document.createElement("li");
    listItem.innerHTML = hobby;
    hobbiesUL.appendChild(listItem);
    }
};
// Call the event
btnHobbies.addEventListener('click', getHobbies);

// 8. Display a profile card from an object
class MyObject{
  constructor(name,age,email,image){
    this._name = name;
    this._age = age;
    this._email = email;
    this._image = image;
  }
  get name(){
    return this.name;
  }
  set name(newName){
    this._name = newName;
  }
  get age(){
    return this.age;
  }
  set name(newAge){
    this._age = newAge;
  }
  get email(){
    return this.email;
  }
  set email(newEmail){
    this._email = newEmail;
  }
  get image(){
    return this.image;
  }
  set image(newImage){
    this._image = newImage;
  }
}
//Object
const myProfileObject = new MyObject('Elias', 42, 'elias@email.com', '.images/pixelFace.png');

// Selectors
let displayCard = document.querySelector('#displayCard');
let btnProfile = document.querySelector('#btnProfile');

function showActive(){
  console.log(myProfileObject)
};

btnProfile.addEventListener('click', showActive);

/*Function {
    //for loop
      //if statement
  }*/
