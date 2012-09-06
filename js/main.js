// Matthew Richter 
// ASD - Full Sail University
// Project 1
// August 30, 2012

$("#home").on('pageinit',function(){
// get JSON
	$("#getJSON").on("click", function(){
		console.log("#getJSON");
		$("#dataList").empty();
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
					).appendTo("#dataList");
					$("#dataList").listview('refresh');
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
		$("#dataList").empty();
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
			).appendTo("#dataList");
			$("#dataList").listview('refresh');
		});
	}
});
});
// get CSV
	$("#getCSV").on("click", function(){
		console.log("#getCSV");
		$("#dataList").empty();
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
					"</div>"
				).appendTo("#dataList");
				$("#dataList").listview('refresh');
				}
			}
		});
		return false;
// I used http://stackoverflow.com/questions/7431268/how-read-data-from-csv-file-using-javascript to help with the $("#getCSV")
});
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
					$("#newProjectLink").css("display", "none");
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
		var	item 						= {};
				item.projecttype		= ["Project Type:", $("#projecttype").val()];
				item.jobname 			= ["Project Name:", $("#jobname").val()];
				item.firstname 			= ["First Name:", $("#firstname").val()];
				item.lastname 			= ["Last Name:", $("#lastname").val()];
				item.email 				= ["Email:", $("#email").val()];
				item.phone 				= ["Phone:", $("#phone").val()];						
				item.priority 			= ["Priority", $("#priority").val()];
				item.date				= ["Start Date", $("#date").val()];
				item.notes 				= ["Job Notes", $("#notes").val()];
		// Save data into local storage : use stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));	
		alert("Your project has been saved successfully!");	
		console.log(item);		
	} 
// the key is only generated when we are editing a project so if there is no key its a new project
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
		$("#projectData").attr("id", "items");
		for( var i = 0, len=localStorage.length; i<len; i++){
			var makeLi = $('<li class="singleProjectItem"></li>').appendTo(list);
			var linksLi	= $('<li class="singleProjectLink"></li>').appendTo(list);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
// Convert the string from localStorage value back to an object using JSON.parse
			var obj = JSON.parse(value);
			for(var n in obj){
				$('<p>'+obj[n][0]+obj[n][1]+'</p>').appendTo(makeLi);
			}	
				makeItemLinks(localStorage.key(i), linksLi); 
		}
			$("#projectDataList").listview('refresh');	
	};	
// Auto populate local storage from json
// actual json object data for this to work will come from json.js which is loaded from HTML page
// the main.js and json.js files can see eachothers variables - that's why we can loop through json in the main.js file
	function autoFillData(){
		for(var n in json){
			var 	id 	= Math.floor(Math.random()*10000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
			console.log(json);
		}
	}
// This function is going to create the link/buttons for each project when accessed
// make item links/buttons for each project
	function makeItemLinks(key, linksLi){
		var editLink = $(linksLi).append('<a href="#">Edit Project</a>');
		editLink.key = key;
		$("#editLink").on("click", editItem);
		var deleteLink = $(linksLi).append('<a href="#">Delete Project</a>');
		deleteLink.key = key;
		$("deleteLink").on("click", deleteItem);
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
		$("priority").value = item.priority[1];
		$("startDate").value = item.startDate[1];
		$("jobNotes").value = item.jobNotes[1];
		// remove the initial eventListener from the save project button
		$("#editItem").on("click", saveLocal);
		// change save project buttom value to say edit project button
		$("saveProject").val() = "Edit Project";
		var editSaveProject = $("saveProject");
		// saving key value in this function as a property of the editSaveProject event 
		// so we can use that value when we save the edited project
		$("#editSaveProject").on("click", validate);
		editSaveProject.key = this.key;
	}
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this project?");
		if(ask){
			localStorage.removeItem(this.key);
			window.location.reload();
		}else{
			alert("Project was not deleted.");
		}
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
// the key is only generated when we are editing a project so if there is no key its a new project

});

	
	


