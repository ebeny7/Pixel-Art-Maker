
//submit function to click on Grid height and Grid width, and call makeGrid function//
document.getElementById("sizePicker").addEventListener("submit", function (e) {
	//console.log(e);
	e.preventDefault();
	makeGrid();
	while (row.length > width + 1 && cell.length > height + 1)	{
		console.log(pixel.deleteRow(width));
	}	
})


//makeGrid function to draw grid and add color to cells
function makeGrid() {
	var pixel = document.getElementById("pixel_canvas");
	var width = document.getElementById("input_width").value;
	var height = document.getElementById("input_height").value;
	var color = document.getElementById("colorPicker").value;
	for (var i=0; i<=width; i++) {
		row = pixel.insertRow(i);//creating empty tr elements
		for (var x=0; x<=height; x++) {
			cell = row.insertCell(x);//inserting cells into td elements
				cell.addEventListener("click", function() {
					this.style.backgroundColor = color;
				})
			}
		}
	}