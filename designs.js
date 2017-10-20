// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var width = document.getElementById("input_width").value;
var height = document.getElementById("input_height").value;
var color = document.getElementById("colorPicker").value;
var pixel = document.getElementById("pixel_canvas");
var picker = document.getElementById("sizePicker");

picker.addEventListener("submit", function(e) {
	//console.log(e);
	e.preventDefault();
	this.submit();
})

function makeGrid(width, height, color) {
	while (width > 1) {
		pixel.deleteRow(width);
	for (var i = 0; i<=width; i++) {
		var row = pixel.insertRow(i);
			for (var x = 0; x <=height; x++) {
				var cell = row.insertCell(x);
					cell.addEventListener("click", function() {
						this.style.backgroundColor = color;
					})
			}
	}
	}
}


console.log(makeGrid(width, height, color));
 