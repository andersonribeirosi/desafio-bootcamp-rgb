function redInput() {
  red = document.getElementById('red').value;
  document.getElementById('redValue').value = red;
}

function greenInput() {
  green = document.getElementById('green').value;
  document.getElementById('greenValue').value = green;
}

function blueInput() {
  blue = document.getElementById('blue').value;
  document.getElementById('blueValue').value = blue;
}

function colors() {
  document.body.style.backgroundColor =
    'rgb(' + this.red + ',' + this.green + ',' + this.blue + ')';
}
