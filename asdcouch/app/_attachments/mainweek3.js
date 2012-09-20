// Matthew Richter 
// ASD 1209 - Full Sail University
// Project 3
// September 11, 2012

//$("#home").on('pageinit',function(){
$("#home").live("pageshow", function() {
	$("#dataHolder").empty();
		$.ajax({
			"url": 		"_view/projects",
	    	"dataType":	"json",
	    	"success": function(data) {
//	    		console.log(data);
			
			$.each(data.rows, function(index, value){
				var item = (value.value || value.doc);
				$("#dataHolder").append(
					$("<li>").append(
							$("<a>")
								.attr('href', "detail.html?_id=" + item._id) 
								.text(item.projectName)
					)	
				);
			});
			$("#dataHolder").listview("refresh");
		}
	});

// end on initial $(home)
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

  
$("#detail").live("pageshow", function() {
	var id = urlVars()["_id"];
	console.log(id);
	$.ajax({
		"url":		"_view/projects?key=" + '"' + id + '"' ,
		"dataType":	"json",
		"success": function(data) {
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
						.attr('href', 'edit.html?_id=' + id ) 
						.attr('id', 'deleteProject')
						.text("Delete Project")
								
					)
			);
			console.log(id);
			$("#editDeleteButtons").listview("refresh");

		}
	});
//			var urlData = $($.mobile.activePage).data("url");
			
});  
// ajax call to the couchDB files containing the additions value displaying in the #additionsList UL on the additions page I've changed this to try and create a collapsible list 
$('#additions').on('pageinit', function () {   
	$("#additionsList").empty();
		$.ajax({
	    	"url": 		"_view/additions",
	    	"dataType":	"json",
	    	"success": function(data) {
	    		console.log(data);
	    		
	    		$.each(data.rows, function(index, addition){
//	    			var projectType = addition.value.projectType;
	    			var projectName = addition.value.projectName;
	    	    	var firstName = addition.value.firstName;
	    	    	var lastName = addition.value.lastName;
	    	    	var email = addition.value.email;
	    	    	var phone = addition.value.phone;
	    	    	var emailBest = addition.value.emailBest;
	    	    	var cost = addition.value.cost;
	    	    	var priority = addition.value.priority;
	    	    	var startDate = addition.value.startDate;
	    	    	var jobNotes = addition.value.jobNotes;

	    	    		$("#additionsList").append(
	    	    				$("<li>").attr("data-role", 
	    	    						"collapsible").attr("data-collapsed", "true")
	    	    						.append($("<h3>").text(projectName))
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
	    		$("#additionsList").listview("refresh");
	    	}
	    });
});
$('#basements').on('pageinit', function () {   
	$("#basementsList").empty();
		$.ajax({
	    	"url": 		"_view/basements",
	    	"dataType":	"json",
	    	"success": function(data) {
	    		console.log(data);
	    		
	    		$.each(data.rows, function(index, basement){
//	    			var projectType = basement.value.projectType;
	    			var projectName = basement.value.projectName;
	    	    	var firstName = basement.value.firstName;
	    	    	var lastName = basement.value.lastName;
	    	    	var email = basement.value.email;
	    	    	var phone = basement.value.phone;
	    	    	var emailBest = basement.value.emailBest;
	    	    	var cost = basement.value.cost;
	    	    	var priority = basement.value.priority;
	    	    	var startDate = basement.value.startDate;
	    	    	var jobNotes = basement.value.jobNotes;
// 
	    	    		$("#basementsList").append(
	    	    				$("<li>").attr("data-role", 
	    	    						"collapsible").attr("data-collapsed", "true")
	    	    						.append($("<h3>").text(projectName))
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
	    		$("#basementsList").listview("refresh");
	    	}
	    });
});
$('#kitchens').on('pageinit', function () {   
	$("#kitchensList").empty();
		$.ajax({
	    	"url": 		"_view/kitchens",
	    	"dataType":	"json",
	    	"success": function(data) {
	    		console.log(data);
	    		
	    		$.each(data.rows, function(index, kitchen){
//	    			var projectType = kitchen.value.projectType;
	    			var projectName = kitchen.value.projectName;
	    	    	var firstName = kitchen.value.firstName;
	    	    	var lastName = kitchen.value.lastName;
	    	    	var email = kitchen.value.email;
	    	    	var phone = kitchen.value.phone;
	    	    	var emailBest = kitchen.value.emailBest;
	    	    	var cost = kitchen.value.cost;
	    	    	var priority = kitchen.value.priority;
	    	    	var startDate = kitchen.value.startDate;
	    	    	var jobNotes = kitchen.value.jobNotes;

	    	    		$("#kitchensList").append(
	    	    				$("<li>").attr("data-role", 
	    	    						"collapsible").attr("data-collapsed", "true")
	    	    						.append($("<h3>").text(projectName))
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
	    		$("#kitchensList").listview("refresh");
	    	}
	    });
});
$('#lavatories').on('pageinit', function () {   
	$("#lavatoriesList").empty();
		$.ajax({
	    	"url": 		"_view/lavatories",
	    	"dataType":	"json",
	    	"success": function(data) {
	    		console.log(data);
	    		
	    		$.each(data.rows, function(index, lavatory){
//	    			var projectType = lavatory.value.projectType;
	    			var projectName = lavatory.value.projectName;
	    	    	var firstName = lavatory.value.firstName;
	    	    	var lastName = lavatory.value.lastName;
	    	    	var email = lavatory.value.email;
	    	    	var phone = lavatory.value.phone;
	    	    	var emailBest = lavatory.value.emailBest;
	    	    	var cost = lavatory.value.cost;
	    	    	var priority = lavatory.value.priority;
	    	    	var startDate = lavatory.value.startDate;
	    	    	var jobNotes = lavatory.value.jobNotes;

	    	    		$("#lavatoriesList").append(
	    	    				$("<li>").attr("data-role", 
	    	    						"collapsible").attr("data-collapsed", "true")
	    	    						.append($("<h3>").text(projectName))
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
	    		$("#lavatoriesList").listview("refresh");
	    	}
	    });
});
$('#roofs').on('pageinit', function () {   
	$("#roofsList").empty();
		$.ajax({
	    	"url": 		"_view/roofs",
	    	"dataType":	"json",
	    	"success": function(data) {
	    		console.log(data);
	    		
	    		$.each(data.rows, function(index, roof){
//	    			var projectType = roof.value.projectType;
	    			var projectName = roof.value.projectName;
	    	    	var firstName = roof.value.firstName;
	    	    	var lastName = roof.value.lastName;
	    	    	var email = roof.value.email;
	    	    	var phone = roof.value.phone;
	    	    	var emailBest = roof.value.emailBest;
	    	    	var cost = roof.value.cost;
	    	    	var priority = roof.value.priority;
	    	    	var startDate = roof.value.startDate;
	    	    	var jobNotes = roof.value.jobNotes;

	    	    		$("#roofsList").append(
	    	    				$("<li>").attr("data-role", 
	    	    						"collapsible").attr("data-collapsed", "true")
	    	    						.append($("<h3>").text(projectName))
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
	    		$("#roofsList").listview("refresh");
	    	}
	    });
});
$('#contacts').on('pageinit', function () {   
	$("#contactsList").empty();
		$.ajax({
	    	"url": 		"_view/contacts",
	    	"dataType":	"json",
	    	"success": function(data) {
	    		console.log(data);
	    		
	    		$.each(data.rows, function(index, roof){
//	    			var projectType = roof.value.projectType;
	    			var projectName = roof.value.projectName;
	    	    	var firstName = roof.value.firstName;
	    	    	var lastName = roof.value.lastName;
	    	    	var email = roof.value.email;
	    	    	var phone = roof.value.phone;

	    	    		$("#contactsList").append(
	    	    				$("<li>").attr("data-role", 
	    	    						"collapsible").attr("data-collapsed", "true")
	    	    						.append($("<h3>").text(projectName))
	    	    						.append($("<p>").text(firstName))
	    	    						.append($("<p>").text(lastName))
	    	    						.append($("<p>").text(email))
	    	    						.append($("<p>").text(phone))
	    	    				);
	    		});
	    		$("#contactsList").listview("refresh");
	    	}
	    });
});



// new end of $(home)
});
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

$("#jobs").live("pageshow", function() {
	// this is refering to this page
	var job = urlVars()["job"];
	console.log(job);
//	$.couch.db("asdprojecttwo").view("app/additions",{
	//	key: projectName
//	});
	var urlData = $($.mobile.activePage).data("url");
});

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


// Write data from localStorage to the browser
	$("#getProjects").on("click", getProjects);
	function getProjects(){
		toggleControls("on");
		if(localStorage.length === 0 ){
			alert("There is no data in local storage so default data has been added.");
			autoFillData();
			
		}
//		var makeDiv	= document.createElement("div");
//		makeDiv.setAttribute("id", "items");
//		$("#projectData").attr("id","items")
//		var makeList = document.createElement("ul");
//		makeDiv.appendChild(makeList);
//		document.body.appendChild(makeDiv);
//		$("items").css("display, block");
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


	
	
	