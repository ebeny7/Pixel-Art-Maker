// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var width = document.getElementById("input_width");
var height = document.getElementById("input_height");
var color = document.getElementById("colorPicker").value;
var pixel = document.getElementById("pixel_canvas");
var size = document.getElementById("sizePicker");

size.addEventListener("submit", function(e) {
	//console.log(e);
	e.preventDefault();
	document.size.submit();
})

function makeGrid() {
	var row = width.insertRow(pixel);
	for (var i = 0; i >= row; i++)
		var col = height.insertRow(pixel);
		for (var x = 0; x >= col; x++)
			var cell = row.insertCell(pixel);
		size.style.display
		document.cell.style.backgroundColor = "blue";
}

makeGrid();
 