// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var width = document.getElementById("input_width");
var height = document.getElementById("input_height");
var color = document.getElementById("input_color");
var pixel = document.getElementById("pixel_canvas");

$(#sizePicker).on("submit", function (e) {
	//console.log(e);
	e.preventDefault();
	document.getElementById("sizePicker").submit();
})

function makeGrid() {
	var row = width.insertRow(pixel);
	for (var i = 0; i <= row; i++)
		var cell = row.insertCell(value);
	var col = height.insertRow(pixel);
	for (var x = 0; x <= col; x++)
		var cellRow = row.insertCell(value);
			document.cell.style.backgroundColor = "blue";

}

makeGrid();
 