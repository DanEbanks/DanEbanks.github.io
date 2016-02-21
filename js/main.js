	
function askQuestions() {

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {

		$('h1').css('colour', faveColour);
	}

/* when the page has loaded */
$(function() {

	$('img').on('click', askQuestions);

// Hide all the sections
$('h2,h3').next().hide();

		// When the user clicks an h3
		$('h3,h2').on('click', function(){

			// Hide the next element
			$(this).next().slideToggle(50);

		});