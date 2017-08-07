window.onload = function() {


	var princeBtn = document.getElementById("prince-btn");
	var replacementsBtn = document.getElementById("replacements-btn");
	var dylanBtn = document.getElementById("dylan-btn");

	var princeHeader = "Prince";

// if none active, slide up animation
// if position is at 0, slide up animation

	princeBtn.onclick = function(event) {
		createRow(princeHeader);
		changeHeader(princeHeader);
		$('newH2').addClass('animated flipInX');
		document.getElementById('headChange').addClass('show');
	}



	var changeHeader = function(newHead) {
		$('#headChange').addClass('animated flipOutX');
		// document.getElementById("headChange").innerHTML = newHead;
	}

// create function that appends new H2 containing the desired header, just like in forms hw




// $('#prince-btn').on('click', function (e) {
// 	  	e.preventDefault();
// 	  	$('#headChange').addClass('animated bounceOutLeft');
// });

function createRow(words) {
  console.log(words);
  // we need a new div
  var row = document.createElement('div');
  var col = document.createElement('div');
  var h2 = document.createElement('h2');
  h2.innerHTML = words;
  row.append(col);
  h2.className = 'newH2';
  col.className = 'col s12';
  col.append(h2);
  console.log(row);
  // append the whole thing to app
  var headings = document.getElementById("headings");
  headings.append(row);
}




















// window.onload closes below
}
