var myImage = document.querySelector('img')

myImage.onclick = function() {
    var myScr = myImage.getAttribute('scr');
    if(myScr === 'images/123.jpg') {
        myImage.setAttribute ('scr','');
    }else{
        myImage.setAttribute ('scr','');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Введите свое имя');
    localStorage.setItem('name',myName);
    myHeading.textContent='Добро пожаловать' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name')
    myHeading.textContent = 'Привет' + storedName;
}
myButton.onclick = function() {
    setUserName();
}