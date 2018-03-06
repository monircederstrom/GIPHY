var singers = ["Destiny's Child", "NSYNC", "Backstreet Boys", "Boys II Men", "Mariah Carey", "Foo Fighters", "Matchbox Twenty", "No Doubt", "Nirvana", "Monica", "Hanson"];

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