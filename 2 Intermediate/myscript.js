$("form").submit(function(e) {
	e.preventDefault();
});

//Remove Form from Page:
// REALLY LIKE THAT????????????????????????????????????
	// $("form").css("display", "none");



//Create 5 new Div's in the article element:
$("article").append(
	"<div></div>",
	"<div></div>",
	"<div></div>",
	"<div></div>",
	"<div></div>");




//Within the input field change the value to "Search for...":
	var newAttr = "Search for...";
	$("#msg").val(newAttr);




//Add a class name of "box" to each new DIV:
	$("article div").addClass("box");





//Change the link to "www.codefactory.wien":
//Long version:
	// $(document).ready(function() {
	// 	$('a[href$=".com/"]').each(function() {
	// 		console.log(this);
	// 		var oldUrl = $(this).attr("href"); // Get current url
	// 		var newUrl = oldUrl.replace(".com/", ".wien/"); // Create

	// 		$(this).attr("href", newUrl);
	// 	});
	// });

//Short Version:
	$('footer a').attr("href", "https://www.codefactory.wien");
