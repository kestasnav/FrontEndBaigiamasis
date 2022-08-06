
// Burgerio junginejimas

$(".menu-btn").click(function() {
    $(".menu-bar").toggleClass("show");
})

$(".fas").click(function () {
    $(".fas").toggleClass("fa-bars fa-times");
});

// Dezuciu klasiu junginejimas

function displayBox () {
    document.querySelector('.box1').classList.toggle('show1');
    
}

function width () {
    document.querySelector('.box1').classList.add('show1');
    document.querySelector('.box1').classList.toggle('width');
}

function heigth () {
    document.querySelector('.box1').classList.add('show1');
    document.querySelector('.box1').classList.toggle('heigth');
}

function center () {
    document.querySelector('.box1').classList.add('show1');
    document.querySelector('.centerparent').classList.toggle('centerparentdiv');
    document.querySelector('.box1').classList.toggle('center');
}

function position () {
    document.querySelector('.box1').classList.add('show1');
    document.querySelector('.box1').classList.toggle('position');
}


$('#reset').click(function(){
	
    $('.box1').removeClass('show1');
    $('.box1').removeClass('width');
    $('.box1').removeClass('heigth');
    $('.centerparent').removeClass('center');
    $('.box1').removeClass('position'); 
    $('.box1').removeClass('center'); 
    $('.centerparent').removeClass('centerparentdiv'); 
})


// Spalvu keitinejimas


const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");

function recolor(event) {
 const box7 = box6.style.backgroundColor = randomColor();
 const box8 = box2.style.backgroundColor = randomColor();
 const box9 = box3.style.backgroundColor = randomColor();
 const box10 = box4.style.backgroundColor = randomColor();
 const box11 = box5.style.backgroundColor = randomColor();
    box6.innerHTML = box7;
    box2.innerHTML = box8;
    box3.innerHTML = box9;
    box4.innerHTML = box10;
    box5.innerHTML = box11;
}

function randomColor() {
    return 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';
}

function rand() {
    return Math.floor(Math.random() * 256);
}

// Formos pridejimas ir uzpildymas

function addForm () {
    let tbody = document.getElementById("tbody");
    let tbodyTr = tbody.insertRow();
    let cell5 = tbodyTr.insertCell(0);
    let cell6 = tbodyTr.insertCell(1);
    let cell7 = tbodyTr.insertCell(2);
    let cell8 = tbodyTr.insertCell(3);

    cell5.innerHTML = addRowCount();
    let nameVal = document.querySelector("#name").value;
    cell6.innerText = nameVal;
    let lastnameVal = document.querySelector("#lastname").value;
    cell7.innerText = lastnameVal;
    let ageVal = document.querySelector("#age").value;
    let date = new Date().getFullYear();
    let output = date - ageVal;    
    cell8.innerText = output;    
  }
  
  let i = 0;
  function addRowCount() {
    i++;
    return i;
  }
function resetCount () {
    i = 0;
}

$("#emptyForm").click(function() {
    $("#tbody").empty();
    $("#thead").hide();
})

$("#emptyForm").click(function() {
    $("#name").val('');
    $("#lastname").val('');
    $("#age").val('');
})

