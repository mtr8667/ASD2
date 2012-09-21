// Matthew RIchter 
// ASD - Full Sail University
// Project 4
// July 22, 2012

// 
//var parseProjectForm = function(data){
// uses form data here 
//	console.log(data);
//};

/*
sample code from video why jQuery on using JavaScript without library then with library 
window.addEventListener('DOMCOntentLoaded',function(){
	document.getElementById('somelink')
	.addEventListener('click', myFn);
});
thie above will only work in browsers that support W3C

jQuery equivilant

$(function(){
	$('somelink').on('click', myFn);
});
*/
//

//$(document).ready(function(){ - this allows us to wait until the document is fully loaded before we run our code
// this wraps all of our code
// the $ = jQuery object name space - so when we use the $ / the jQuery name space is broken down into two main categories
// utilities methods are all of the methods that are directly on the object itself  example $.trim()  $.merge(); etc... reference the cheat sheet
// the second category is the factory using jquery as a function $() - when the jquery factory is mentioned or referenced it means $()
// the primary use of the factory is to find an element within the page then is gives us additional methods that we can call on top of it.
// we can call global objects like $(document) or $(window) but the more common use is to call a CSS selector expression
// $('')  allows us to pass a string with a CSS selector expression to search the DOM to find elements
// example $('#nav li') this will find all li(s) within a the nav divs we can also consolelog this  consolelog( $('#nav li'));
// when the factory pulls up these elements we can also then we can use the additional methiods jQuery provides on top of it
// example $('#nav li').fadeOut();  this will automatically loop through all the li(s) and fade them out
// Important ****  most of the methods return exactly what the factor called - this can be viewed by consoleloggin the factory call and method see below
// consolelog( $('#nav li').fadeOut() ); - this is important to us becasue we can keep calling methods so we can chain
// example $('#nav li').fadeOut().fadeIn().animate({fontSize:30},100);
// Downside to calling the factory is that everytime we call the factory it creates an object so we can create a var
// example var navlist = $('nav li').fadeOut() etc....  so the next time we want to access the nav li(s) we call var navlist
// some of the jquery factory methods are not chainable $('#nav').hasClass('myClass') returns a boolean - true or false 
// the hasClass is a good way to search through you document to fins all the elements that have a certain class - in the example above it would be all the nav(s) that have a certain class 



//$("#home").on('pageinit',function(){
$("#home").on("pageinit", function() {
	$.couch.db("asd").view("app/sections", {
		success: function(data) {
			console.log(data);
			$("#ulList").empty();
			$.each(data.rows, function(index, value){
				var item = (value.value || value.doc);
				$("#ulList").append(
					$("<li>").append(
							$("<a>")
								.attr("href", "sections.html?section=" + item.title ) 
								.text(item.name)
					)	
				);
			});
			$("#ulList").listview("refresh");
		}
	});


// end on initial $(home)

//$("#saveProject").on("click", function() {
//});

var urlVars = function() {
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split("?");
	// foo?a=1&b=2&c=3 etc...is my case its 10
	var urlPairs = urlParts[1].split("&");
	var urlValues = {};
	for (var pair in urlPairs) {
		var keyValue = urlPairs[pair].split("=");
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
	}
		return urlValues;	
};

$("#sections").live("pageshow", function() {
	var section = urlVars()["section"];
//	console.log(section);
	$.couch.db("asd").view("app/" + section, {
		success: function(data) {
			console.log(data);
			$("#sectionList").empty();
			$.each(data.rows, function(index, value){
				var item = (value.value || value.doc);
				$("#sectionList").append(
					$("<li>").append(
							$("<a>")
								.attr("href", "detail.html?_id=" + item._id + "&" + "_rev=" + item._rev) 
								.text(item.projectName)
					)	
				);
			});
			$("#sectionList").listview("refresh");
		}
	});
//	var urlData = $($.mobile.activePage).data("url");
	
});  
$("#detail").live("pageshow", function() {
	var id = urlVars()["_id"];
	console.log(id);
	$.couch.db("asd").view('app/projects?key="' + id + '"', {
		success: function(data) {
			console.log(data);
		
			$("#detailList").empty();
			$.each(data.rows, function(index, id){
				var _id =			id.value._id;
		   	    var _rev =		id.value._rev; 
		   	    var projectName = id.value.projectName;
    	    	var firstName = id.value.firstName;
    	    	var lastName = id.value.lastName;
    	    	var email = id.value.email;
    	    	var phone = id.value.phone;
    	    	var emailBest = id.value.emailBest;
    	    	var cost = id.value.cost;
    	    	var priority = id.value.priority;
    	    	var startDate = id.value.startDate;
    	    	var jobNotes = id.value.jobNotes;

    	    		$("#detailList").append(
    	    				$("<li>")
    	    						.append($("<h3>").text(projectName))
    	    						.append($("<p>").text(_id))
    	    						.append($("<p>").text(_rev))
    	    						.append($("<p>").text(firstName))
    	    						.append($("<p>").text(lastName))
    	    						.append($("<p>").text(email))
    	    						.append($("<p>").text(phone))
    	    						.append($("<p>").text(emailBest))
    	    						.append($("<p>").text(cost))
    	    						.append($("<p>").text(priority))
    	    						.append($("<p>").text(startDate))
    	    						.append($("<p>").text(jobNotes))

    	    		);
			});
			$("#detailList").listview("refresh");

			$("#editDeleteButtons").empty();
			$("#editDeleteButtons").append(
					$("<li>").append(
						$("<a>")	
						.attr('href', 'edit.html?_id=' + id  ) 
						.attr('id', 'editProject')
						.text("Edit Project")
					)
			);
			$("#editDeleteButtons").append(
					$("<li>").append(
						$("<a>")	
						.attr('href', 'delete.html?_id=' + id ) 
						.attr('id', 'deleteProject')
						.text("Delete Project")
						
					)
			);
			console.log(id);
			$("#editDeleteButtons").listview("refresh");

		}
	});
//	var urlData = $($.mobile.activePage).data("url");
	
});  

$("#edit").live("pageshow", function() {
//$("#editProject").on("click", function(){
	var ide = urlVars()["_id"];
	console.log(ide);
	$.couch.db("asd").openDoc( ide , {
		success: function(data) {
			console.log(data);

			$("#_id").val(data._id);
			$("#_rev").val(data._rev);
			$("#projectType").val(data.projectType);
			$("#projectName").val(data.projectName);
			$("#firstName").val(data.firstName);
			$("#lastName").val(data.lastName);
			$("#startDate").val(data.startDate);
			$("#phone").val(data.phone);
			$("#email").val(data.email);
			$("#priority").val(data.priority);
			$("#cost").val(data.cost);
			$("#jobNotes").val(data.jobNotes);
			$("#emailBest").val(data.emailBest);
		
		}
	});


	
	
});

$("#delete").live("pageshow", function() {
		var ide = urlVars()["_id"];
		console.log(ide);
		$.couch.db("asd").openDoc( ide , {
			success: function(data) {
				console.log(data);

				$("#_id").val(data._id);
				$("#_rev").val(data._rev);
				$("#projectType").val(data.projectType);
				$("#projectName").val(data.projectName);
				$("#firstName").val(data.firstName);
				$("#lastName").val(data.lastName);
				$("#startDate").val(data.startDate);
				$("#phone").val(data.phone);
				$("#email").val(data.email);
				$("#priority").val(data.priority);
				$("#cost").val(data.cost);
				$("#jobNotes").val(data.jobNotes);
				$("#emailBest").val(data.emailBest);
			
			}
		});	
		alert("Pressing delete again will permanently delete this record!");
});

});

