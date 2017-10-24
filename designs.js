//Defining global variables for DOM elements//
var width = document.getElementById("input_width").value;
var height = document.getElementById("input_height").value;
var color = document.getElementById("colorPicker").value;
var pixel = document.getElementById("pixel_canvas");
var picker = document.getElementById("sizePicker");

//submit function to click on Grid height and Grid width, and call makeGrid function//
picker.addEventListener("submit", function (e) {
	e.preventDefault();
	function inputHeight () {
	height.click();
	}
	function inputWidth () {
	width.click();
	}
	makeGrid(width, height, color);
})


//makeGrid function to draw grid and add color to cells//
function makeGrid(a, b, c) {
	for (var i = 0; i<=a; i++) {
		var row = pixel.insertRow(i);
			for (var x = 0; x <=b; x++) {
				var cell = row.insertCell(x);
				cell.addEventListener("click", function() {
					this.style.backgroundColor = c;
					})
			}
	}
}