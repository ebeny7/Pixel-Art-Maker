
var width = document.getElementById("input_width").value;
var height = document.getElementById("input_height").value;
var color = document.getElementById("colorPicker").value;
var pixel = document.getElementById("pixel_canvas");
var picker = document.getElementById("sizePicker");

document.getElementById("sizePicker").addEventListener("submit", function (e) {
	e.preventDefault();
	window.onsubmit = makeGrid;
})

//function callSubmit(h) {
//	document.getElementById("sizePicker").addEventListener("submit", makeGrid);
//}





//function callSubmit() {
//	var size = $( "#sizePicker");
//	size.submit(function (e) {
//		e.preventDefault();
//	})
//}



function deleteRow(a) {
    var x = a.parentNode.parentNode.rowIndex;
    pixel.deleteRow(x);
}

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

makeGrid(width, height, color);
//testGrid();
//width = 10;
//height = 10;