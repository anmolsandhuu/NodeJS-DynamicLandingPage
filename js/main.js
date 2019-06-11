 // DOM Elements

 const time = document.getElementById('time'),
 greeting = document.getElementById('greeting'),
 name = document.getElementById('name'),
 focus = document.getElementById('focus');
 
 //show time
 function showTime(){
     let today = new Date(),
     hour = today.getHours(),
     min = today.getMinutes(),
     sec = today.getSeconds();
 

 // Set Am or Pm

 const amPm = hour >= 12 ? 'PM' : 'AM';

 // Format : 12 hour

 hour = hour % 12 || 12;

 //output time

 time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

 setTimeout(showTime, 1000);
 }
//Add zero
function addZero(x){
    return (parseInt(x, 10) < 10 ? '0' : '') + x;
}

// Set Background and greeting

function setGreetImg(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12 ){
        //Morning
    document.body.style.backgroundImage = "url('../images/morning.jpg')";
    greeting.textContent = 'Good Morning';
    } else if(hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('../images/evening.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
    }
    else{
        // Evening
        document.body.style.backgroundImage = "url('../images/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// Get Name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e){
    if(e.type === 'keypress'){
    // make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText);
        name.blur();
    }
    } else{
        localStorage.setItem('name', e.target.innerText);
    }
}
function setFocus(e){
    if(e.type === 'keypress'){
    if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
    }
    } else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



 // Run 
 showTime();
 setGreetImg();
 getName();
 getFocus();