
//submit function to click on Grid height and Grid width, and call makeGrid function//
document.getElementById("sizePicker").addEventListener("submit", function (e) {
	//console.log(e);
	e.preventDefault();
	document.getElementById("pixel_canvas").innerHTML = '';
	makeGrid();	
})


//makeGrid function to draw grid and add color to cells
function makeGrid() {
	const pixel = document.getElementById("pixel_canvas");
	let width = document.getElementById("input_width").value;
	let height = document.getElementById("input_height").value;
	for (var i=0; i<=height; i++) {
		var row = pixel.insertRow(i);//creating empty tr elements
		for (var x=0; x<=width; x++) {
			var cell = row.insertCell(x);//inserting cells into td elements
			cell.addEventListener("click", function() {//function to color the grid
				this.style.backgroundColor = document.getElementById("colorPicker").value;
			})
		}
	}
} 

