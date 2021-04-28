
let count = 0; 

document.getElementById('goals').onclick = function changeContent() {

  if (count == 0) {
    count++;
    document.getElementById('goals').textContent = "Become Full-Stack To Work In Any Team!!!";
    document.getElementById('goals').style = "Color: #fff600; padding-top: 6%; font-size: 40px; cursor: pointer; max-width: 50%; text-align: center";
  } else {
    count--;
    document.getElementById('goals').textContent = "Click to View Next Goals!";
    document.getElementById('goals').style = "padding-top: 6%; font-size: 50px; cursor: pointer";
  }
}