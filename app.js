var singers = ["Destiny's Child", "Usher", "NSYNC", "Snoop Dog", "Tupac", "Lauryn Hill", "Backstreet Boys", "Boys II Men", "Mariah Carey", "Foo Fighters", "Brandy", "Matchbox Twenty", "No Doubt", "Nirvana", "Monica", "Hanson", "Smashing Pumpkins", "Pearl Jam", "Bell Biv DeVoe", "Dr. Dre"];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + singers + "&api_key=LKu9IxoQTdCU5irRuQpXBXXT38RUIE70&limit=10&g=pg13";


//Adding artist to array
function renderButtons() {
	$("#viewbuttons").empty();

	for (var i = 0; i < singers.length; i++) {
		var a = $("<button>");
		a.addClass("music");
		a.attr("data-name", singers[i]);
		a.text(singers[i]);
		$("#viewbuttons").append(a);
	}
}

//adding buttons to document
$("#add").on("click", function(event) {
	event.preventDefault();
	var music = $("#input").val().trim();
	singers.push(music);
	$("")
	renderButtons();
});

//function to call giphy api to buttons
$(document).on("click", "button", function() {

	//link button click to giphys
	var singers = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + singers + "&api_key=LKu9IxoQTdCU5irRuQpXBXXT38RUIE70&limit=10&rating=pg13";

	$.ajax({
	url: queryURL,
	method: "GET"
	})
	.then(function(response) {
		console.log(response);
		var results = response.data;
		//loop through each to append to div
		for (var i = 0; i < results.length; i++) {
			//create a new div to store giphys in
			var singerDiv = $("<div>");
			//create paragraph tag to display rating
			var p = $("<p>").text("Rating: " + results[i].rating);
			//create a img tag to display giph image
			var singerImage = $("<img>");

			//append p and img tag to singerDiv
			singerDiv.append(p);
			singerDiv.append(singerImage);
			//display singerDIV on HTML 
			$("#giphs").prepend(singerDiv);


				//add class of gif to image
				singerImage.addClass("gif");
				//set src attribute
				singerImage.attr("src",results[i].images.fixed_height_small_still.url);
				
				singerImage.attr("data-still",results[i].images.fixed_height_small_still.url);
				
				singerImage.attr("data-animate",results[i].images.fixed_height_small.url); 

		}

		// on click function to animate or still
			$(document).on("click", ".gif", function() {
				var state = $(this).attr('data-state');
				if (state == 'still') {
					$(this).attr('src', $(this).data('animate'));
					$(this).attr('data-state', 'animate');
				}
				else {
				$(this).attr('src', $(this).data('still'));
				$(this).attr('data-state', 'still');
				}
			});
	});
});