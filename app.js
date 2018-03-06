var singers = ["Destiny's Child", "Usher", "NSYNC", "Snoop Dog", "Tupac", "Lauryn Hill", "Backstreet Boys", "Boys II Men", "Mariah Carey", "Foo Fighters", "Brandy", "Matchbox Twenty", "No Doubt", "Nirvana", "Monica", "Hanson", "Smashing Pumpkins", "Pearl Jam", "Bell Biv DeVoe", "Dr. Dre"];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + singers + "&api_key=LKu9IxoQTdCU5irRuQpXBXXT38RUIE70&limit=10&g=pg13";

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




//link buttons to GIPHY API
$("#add").on("click", function(event) {
	event.preventDefault();
	var music = $("#input").val().trim();
	singers.push(music);
	renderButtons();
});


renderButtons();

$("button").on("click", function() {
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
		//setting src attribute to image from results array
		singerImage.attr("src", results[i].images.fixed_height.url);
		//append p and img tag to singerDiv
		singerImage.attr("data-state");
	singerDiv.append(p);
	singerDiv.append(singerImage);
	//display singerDIV on HTML 
	$("#giphs").prepend(singerDiv);


	}
});
});

$(".music").on("click", function() {
	var state = $(this).attr("data-state");
	if (state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });