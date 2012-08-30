// Matthew RIchter 
// MIU - Full Sail University
// Project 3
// May 17, 2012


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



$("#home").on('pageinit',function(){
// get JSON
	$("#getJSON").on("click", function(){
		console.log("#getJSON");
		$("#dataHolder").empty();
		$.ajax({
			url: 		"data/data.json",
			type:		"GET",
			dataType:	"json",
			success:	function(response){
				for (var i=0, j=response.projectData.length; i<j; i++){
					console.log(response);
					var sp = response.projectData[i];
					$(""+
						"<div>"+  
							"<h2>" + sp.projects +"</h2>"+
							"<p>" + sp.project +"</p>"+
							"<p>" + sp.pname +"</p>"+
							"<p>" + sp.fname +"</p>"+
							"<p>" + sp.lname +"</p>"+
							"<p>" + sp.email +"</p>"+
							"<p>" + sp.phone +"</p>"+
							"<p>" + sp.emailOkay +"</p>"+
							"<p>" + sp.cost +"</p>"+
							"<p>" + sp.priority +"</p>"+
							"<p>" + sp.startDate +"</p>"+
							"<p>" + sp.jobNotes +"</p>"+
						"</div>"
					).appendTo("#dataHolder");
				};
			},
			error: function(error){
				console.log(error);
			}
		});
});
// get XML
	$("#getXML").on("click", function(){
		console.log("#getXML");
		$("#dataHolder").empty();
		$.ajax({
			url: 		"data/data.xml",
			type:		"GET",
			dataType:	"xml",
			success:	function(xml){
			console.log(xml);			
			$(xml).find("projects").each(function(){
				var project = $(this).find("project").text();
				var projectType = $(this).find("projectType").text();
				var pName = $(this).find("pName").text();
				var fName = $(this).find("fName").text();
				var lName = $(this).find("lName").text();
				var email = $(this).find("email").text();
				var phone = $(this).find("phone").text();
				var emailOkay = $(this).find("emailOkay").text();
				var cost = $(this).find("cost").text();
				var priority = $(this).find("priority").text();
				var startDate = $(this).find("startDate").text();
				var jobNotes = $(this).find("jobNotes").text();
			$(""+
				"<div>"+  
					"<h2>" + project +"</h2>"+
					"<p>" + projectType +"</p>"+
					"<p>" + pName +"</p>"+
					"<p>" + fName +"</p>"+
					"<p>" + lName +"</p>"+
					"<p>" + email +"</p>"+
					"<p>" + phone +"</p>"+
					"<p>" + emailOkay +"</p>"+
					"<p>" + cost +"</p>"+
					"<p>" + priority +"</p>"+
					"<p>" + startDate +"</p>"+
					"<p>" + jobNotes +"</p>"+
				"</div>"
			).appendTo("#dataHolder");
		});
	}
});
});
// get CSV
	$("#getCSV").on("click", function(){
		console.log("#getCSV");
		$("#dataHolder").empty();
		$.ajax({
			url: 		"data/data.csv",
			type:		"GET",
			dataType:	"text",
			success:	function(text){
			console.log(text);
// \r\n  return cariage then new line then new line
				var textLines = text.split(/\r\n|\n/);
// var headers is the value headers - project, project type , first name etc... I'm setting up headers to just pull out the headers from the array
				var headers = textLines[0].split(",");
				
				var lines = [];	
				for (var i=1; i<textLines.length;i++){
					var text = textLines[i].split(",");
					if (text.length == headers.length){
						var projectData = [];						
						for (var j=0; j<headers.length;j++){
							projectData.push(text[j]);
						}
						lines.push(projectData);
					} 
				}
				for (var t=0; t<lines.length;t++){
					var thisProjectData = lines[t];	
				
				$(""+
					"<div>"+  
						"<h2>" + thisProjectData[0] +"</h2>"+
						"<p>" + thisProjectData[1] +"</p>"+
						"<p>" + thisProjectData[2] +"</p>"+
						"<p>" + thisProjectData[3] +"</p>"+
						"<p>" + thisProjectData[4] +"</p>"+
						"<p>" + thisProjectData[5] +"</p>"+
						"<p>" + thisProjectData[6] +"</p>"+
						"<p>" + thisProjectData[7] +"</p>"+
						"<p>" + thisProjectData[8] +"</p>"+
						"<p>" + thisProjectData[9] +"</p>"+
						"<p>" + thisProjectData[10] +"</p>"+
						"<p>" + thisProjectData[11] +"</p>"+
					"</div>"
				).appendTo("#dataHolder");
				}
			}
		});
		return false;
// I used http://stackoverflow.com/questions/7431268/how-read-data-from-csv-file-using-javascript to help with the $("#getCSV")
});
});




//});

$("#newProject").on('pageinit',function(){

	var element = $(document),
		projectform = $( "#projectForm" ),
		formerrorslink = $("#formerrorslink")
	;

// Toggle control 
	function toggleControls(n){
		switch(n){
			case "on":
//					$("projectForm").css("display", "none");
					$("#projectForm").css("display", "none");
//					$("clearProjectsLink").css("display", "inline");
					$("#deleteProjects").css("display", "inline");
					$("#newProjectLink").css("display", "inline");
//					$("showProjectsLink").css("display", "none");
					$("#getProjects").css("display", "none");
					$("#footer").css("display", "none");
					break;
			case "off":
					$("#projectForm").css("display", "block");
					$("#deleteProjects").css("display", "inline");
					$("#getProjects").css("display", "inline");
					$("#newProjectLink").css("display", "none");
					$("#items").css("display", "none");
					break;
			default:
					return false;
		}
}
// the key is only generated when we are editing a project so if there is no key its a new project
$("#saveProject").on("click", saveLocal);	
	function saveLocal(key){
		if(!key){
			var 	id 						= Math.floor(Math.random()*10000001);
		}else{
			//set the id to the existing key we're editing so the data will be modified and we'll save over the original data
			//this key has been passed along from the editSaveProject eventListener to the validate function then passed here
			// into storeLocal function
			id = key;
		}
		// get all the form field values and store them in an object.
		// the object properties contain an array with the form label and input value.
		getSelectedRadio();
		getCheckboxValue();
		var	item 					= {};
				item.project		= ["Project Type:", $("project").value];
				item.pname 			= ["Project Name:", $("pname").value];
				item.fname 			= ["First Name:", $("fname").value];
				item.lname 			= ["Last Name:", $("lname").value];
				item.email 			= ["Email:", $("email").value];
				item.phone 			= ["Phone:", $("phone").value];			
				item.emailOkay 		= ["Communicate Via email:", emailOkay];
				item.cost			= ["Price per sq ft.", cost];			
				item.priority 		= ["Priority", $("priority").value];
				item.startDate		= ["Start Date", $("startDate").value];
				item.jobNotes 		= ["Job Notes", $("jobNotes").value];
		// Save data into local storage : use stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));	
		alert("Your project has been saved successfully!");			
	} 

// Write data from localStorage to the browser
	$("#getProjects").on("click", getProjects);
	function getProjects(){
		toggleControls("on");
		if(localStorage.length === 0 ){
			alert("There is no data in local storage so default data has been added.");
			autoFillData();
			
		}

//	declaring var=list
		var list = $.find("#projectDataList");
		for( var i = 0, len=localStorage.length; i<len; i++){
			var makeLi = $('<li class="singleProjectItem"></li>').appendTo(list);
//			var linksLi	= $("li");
//			makeList.appendChild(makeLi);
//			$(makeLi).appendTo("#items");
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// Convert the string from localStorage value back to an object using JSON.parse
			var obj = JSON.parse(value);
//			var makeSubList = makeList.appendChild(makeLi);
//			makeLi.appendChild(makeSubList);
//			getImage(obj.project[1], makeSubList);
/*
			for(var n in obj){
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
				}
*/
			for(var n in obj){
				$('<p>'+obj[n][0]+obj[n][1]+'</p>').appendTo(makeLi);
//				console.log(obj[n][0]);
			}	
				// create links/buttons (edit & delete) for each project in local storage
//				makeItemLinks(localStorage.key(i), linksLi); 
//				console.log(obj);
				
		}
			$("#projectDataList").listview('refresh');	
}
//});
		
// Auto populate local storage from json
	// actual json object data for this to work will come from json.js which is loaded from HTML page
	// the main.js and json.js files can see eachothers variables - that's why we can loop through json in the main.js file
	function autoFillData(){
		for(var n in json){
			var 	id 	= Math.floor(Math.random()*10000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
			
		}
	}

// This function is going to create the link/buttons for each project when accessed
	// make item links/buttons for each project

	function makeItemLinks(key, linksLi){
		var editLink = $('<a href="#">Edit Project</a>').appendTo(linksLi);
		editLink.attr();
		var deleteLink = $('<a href="#">Delete Project</a>').appendTo(linksLi);

//		var editLink = $("a");
//		editLink.href = "#";
		editLink.key = key;
//		var editText = "Edit Project";
		$("editLink").on("click", editItem);
//		$("editLink").html("editText");
		$("linksLi").append("editLink");
		// add line break
//		var breakTag = $("br");
		$("linksLi").append("breakTag");
//		var deleteLink = $("a");
//		deleteLink.href = "#";
		deleteLink.key = key;
//		var deleteText = "Delete Project";
		$("deleteLink").on("click", deleteItem);
//		$("deleteLink").html("deleteText");
//		$("linksLi").append("deleteLink");
	}

// function to allow us to pull a project from local storage and edit an item
	function editItem(){
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		// show the add project form
		toggleControls("off");
		// pull in the data of the current project from local storage
		$("project").value 	= item.project[1];
		$("pname").value 	= item.pname[1];
		$("fname").value 	= item.fname[1];
		$("lname").value 		= item.lname[1];
		$("email").value 		= item.email[1];
		$("phone").value 		= item.phone[1];
		var radios = document.forms[0].cost;
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "low" && item.cost[1] == "low"){
				radios[i].setAttribute("checked", "checked");
			}else if(radios[i].value == "medium" && item.cost[1] == "medium"){
				radios[i].setAttribute("checked", "checked");
			}else if(radios[i].value == "high" && item.cost[1] == "high"){
				radios[i].setAttribute("checked", "checked");
			}
		}
		if(item.emailOkay[1] == "Yes"){
			$("emailOkay").attr("checked", "checked");
		}
		$("priority").value = item.priority[1];
		$("startDate").value = item.startDate[1];
		$("jobNotes").value = item.jobNotes[1];
		// remove the initial eventListener from the save project button
		save.removeEventListener("click", saveLocal);
		// change save project buttom value to say edit project button
		$("saveProject").value = "Edit Project";
		var editSaveProject = $("saveProject");
		// saving key value in this function as a property of the editSaveProject event 
		// so we can use that value when we save the edited project
		editSaveProject.addEventListener("click", validate);
		editSaveProject.key = this.key;
	}

// 
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this project?");
		if(ask){
			localStorage.removeItem(this.key);
			window.location.reload();
		}else{
			alert("Project was not deleted.");
		}
	}

// Get the project image for current project being displayed
	function getImage(projectName, makeSubList){
		var imageLi = $("li");
		$("makeSubList").append("imageLi");
		var newImg = $("img");
		var setSrc = $("newImg").attr("src", "images/" + projectName + ".png");
		$("imageLi").append("newImg");
	}


$("#deleteProject").on("click", deleteProject);
// delete project functions
	function deleteProject(){
		if(localStorage.length === 0){
			alert("There are no projects to delete.")
		}else{
			localStorage.clear();
			alert("All projects have been deleted!");
			window.location.reload();
			return false;
		}
	}
 
// Validate function for the form
	projectform.validate({
		invalidHandler: function(form, validator){
			// this bring up the pop up error dialog
			formerrorslink.click();
			var html = ' ';
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>' + fieldName + '</li>';
			};
			$('#showerrors ul').html(html);
		},
		submitHandler: function(){
			var 	data = projectform.serializeArray();
			parseProjectForm(data);
			
		}
	});
	var parseProjectForm = function(data){
// uses form data here 
	//console.log(data);
	//localStorage.setItem(key, JSON.stringify(item));	
	$("parseProjectForm").data(data);
		alert("Your project has been saved successfully!");		
	};
// the key is only generated when we are editing a project so if there is no key its a new project
	function saveLocal(key){
		if(!key){
			var 	id 						= Math.floor(Math.random()*10000001);
		}else{
			//set the id to the existing key we're editing so the data will be modified and we'll save over the original data
			//this key has been passed along from the editSaveProject eventListener to the validate function then passed here
			// into storeLocal function
			id = key;
		}
		// get all the form field values and store them in an object.
		// the object properties contain an array with the form label and input value.
		getSelectedRadio();
		getCheckboxValue();
		var	item 					= {};
				item.project		= ["Project Type:", $("project").value];
				item.pname 			= ["Project Name:", $("pname").value];
				item.fname 			= ["First Name:", $("fname").value];
				item.lname 			= ["Last Name:", $("lname").value];
				item.email 			= ["Email:", $("email").value];
				item.phone 			= ["Phone:", $("phone").value];			
				item.emailOkay 		= ["Communicate Via email:", emailOkay];
				item.cost			= ["Price per sq ft.", cost];			
				item.priority 		= ["Priority", $("priority").value];
				item.startDate		= ["Start Date", $("startDate").value];
				item.jobNotes 		= ["Job Notes", $("jobNotes").value];
		// Save data into local storage : use stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));	
		alert("Your project has been saved successfully!");			
	} 


});
/*
$("#feedback").on('pageinit',function(){

});

$("#jobreporting").on('pageinit',function(){

});

$("#underconstruction").on('pageinit',function(){

});

$("#additions").on('pageinit',function(){

});

*/

// Just above is the JavaScript I used for the Gold MIU app - below is my attempt at jQuery ... here we go
// function for document ready - this will wrap our entire code.

//$(function(){
	
// Find the value of a selected radial button ,
	// 
	// I believe these are now being handled by the plugin


	function getSelectedRadio(){
		var radios = document.forms[0].cost;
		for( var i=0; i < radios.length; i++){
			if(radios[i].checked){
			cost = radios[i].value;
			}
		}
	}
	function getCheckboxValue(){
		if($("emailOkay").checked){
			emailOkay	=	$("emailOkay").value;
		}else{
			emailOkay 	=	"No"
		}
	}	





/*

	// Set link & submit Click Events 

 	var showProjectsLink = ge("showProjectsLink");
 	showProjectsLink.addEventListener("click", getProjects);
 	var clearProjectsLink = ge('clearProjectsLink');
 	clearProjectsLink.addEventListener("click", deleteProject); 
 	var save = ge("saveProject");
 	save.addEventListener("click", validate);

*/	
		
	
	
	


