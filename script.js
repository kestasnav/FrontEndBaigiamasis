function displayBox () {
    document.querySelector('.styledbox').classList.toggle('show');
    
}

function width () {
    document.querySelector('.box1').classList.toggle('width');
}

function heigth () {
    document.querySelector('.box1').classList.toggle('heigth');
}

function center () {
    document.querySelector('.box1').classList.toggle('center');
}

function position () {
    document.querySelector('.box1').classList.toggle('position');
}

const box6 = document.querySelector(".box6");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");

function recolor(event) {
    box6.style.backgroundColor = randomColor();
    box2.style.backgroundColor = randomColor();
    box3.style.backgroundColor = randomColor();
    box4.style.backgroundColor = randomColor();
    box5.style.backgroundColor = randomColor();
}

function changeText() {
    box6.innerHTML = randomColor();
    box2.innerHTML = randomColor();
    box3.innerHTML = randomColor();
    box4.innerHTML = randomColor();
    box5.innerHTML = randomColor();
}

function randomColor() {
    return 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';
}

function rand() {
    return Math.floor(Math.random() * 256);
}

 $(".menu-btn").click(function() {
    $(".menu-bar").toggleClass("show");
})

function addForm () {
    let element = document.getElementById("thead");
    element.classList.remove("off");
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
    addForm.value = i++;
    return i;
  }


$("#emptyForm").click(function() {
    $("#tbody").empty();
    $("#thead").css("display", "none");
})


