window.onload = function() {


	var princeBtn = document.getElementById("prince-btn");
	var replacementsBtn = document.getElementById("replacements-btn");
	var dylanBtn = document.getElementById("dylan-btn");

	var princeHeader = "Prince";

// if none active, slide up animation
// if position is at 0, slide up animation

	princeBtn.onclick = function(event) {
		// createRow(princeHeader);
		changeHeader();
		$("#headings").addClass('hg-move');
		$("#princeHeader").removeClass("hidden");
		$("#princeHeader").addClass('animated flipInX');
		$("#artist").removeClass('hidden');
		$("#artist").addClass('animated fadeInUp');
		
	}



	var changeHeader = function(newHead) {
		$('#headChange').addClass('animated flipOutX');

	}


// window.onload closes below
}
