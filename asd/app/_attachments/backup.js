additions
function(doc) {
	  if (doc.projectType === "Addition") {
	    emit(doc.projectType, {
	    	"_id":			doc._id,
	  	 	 "_rev":		doc._rev, 
	    	"projectName": doc.projectName,
	    	 "firstName": doc.firstName,
	    	 "lastName": doc.lastName,
	    	 "email": doc.email,
	    	 "phone": doc.phone,
	    	 "emailBest": doc.emailBest,
	    	 "cost": doc.cost,
	    	 "priority": doc.priority,
	    	 "startDate": doc.startDate,
	    	 "jobNotes": doc.jobNotes
	  
	    });
	  }
	};
basements
function(doc) {
	  if (doc.projectType === "Basement") {
	    emit(doc.projectType, {
	    	"_id":			doc._id,
	  	 	 "_rev":		doc._rev, 
	    	"projectName": doc.projectName,
	    	 "firstName": doc.firstName,
	    	 "lastName": doc.lastName,
	    	 "email": doc.email,
	    	 "phone": doc.phone,
	    	 "emailBest": doc.emailBest,
	    	 "cost": doc.cost,
	    	 "priority": doc.priority,
	    	 "startDate": doc.startDate,
	    	 "jobNotes": doc.jobNotes
	  
	    });
	  }
	};

contacts
function(doc) {
	if (doc._id.substr(0,9) === "JobGenie:"){
		emit(doc._id.substr(9), {
			"firstName": 	doc.firstName,
			"lastName": 	doc.lastName,
			"email": 		doc.email,
			"phone":		doc.phone
		});
	}	
	
};

kitchens
function(doc) {
	  if (doc.projectType === "Kitchen") {
	    emit(doc.projectType, {
	    	"_id":			doc._id,
	  	 	 "_rev":		doc._rev, 
	    	"projectName": doc.projectName,
	    	 "firstName": doc.firstName,
	    	 "lastName": doc.lastName,
	    	 "email": doc.email,
	    	 "phone": doc.phone,
	    	 "emailBest": doc.emailBest,
	    	 "cost": doc.cost,
	    	 "priority": doc.priority,
	    	 "startDate": doc.startDate,
	    	 "jobNotes": doc.jobNotes
	  
	    });
	  }
	};

lavatories
function(doc) {
	  if (doc.projectType === "Lavatory") {
	    emit(doc.projectType, {
	    	"_id":			doc._id,
	  	 	 "_rev":		doc._rev, 
	    	"projectName": doc.projectName,
	    	 "firstName": doc.firstName,
	    	 "lastName": doc.lastName,
	    	 "email": doc.email,
	    	 "phone": doc.phone,
	    	 "emailBest": doc.emailBest,
	    	 "cost": doc.cost,
	    	 "priority": doc.priority,
	    	 "startDate": doc.startDate,
	    	 "jobNotes": doc.jobNotes
	  
	    });
	  }
	};

projects
function(doc) {
	  if (doc._id.substr(0,9) ==="JobGenie:") {
	    emit(doc._id, {
	    	 "_id":			doc._id,
	   	     "_rev":		doc._rev, 
	    	 "projectType": doc.projectType,
	    	 "projectName": doc.projectName,
	    	 "firstName": 	doc.firstName,
	    	 "lastName": 	doc.lastName,
	    	 "email": 		doc.email,
	    	 "phone": 		doc.phone,
	    	 "emailBest": 	doc.emailBest,
	    	 "cost": 		doc.cost,
	    	 "priority": 	doc.priority,
	    	 "startDate": 	doc.startDate,
	    	 "jobNotes": 	doc.jobNotes
	  
	    });
	  }
	};

roofs
function(doc) {
	  if (doc.projectType === "Roof") {
	    emit(doc.projectType, {
	    	 "_id":			doc._id,
	   	 	 "_rev":		doc._rev,
	    	 "projectName": doc.projectName,
	    	 "firstName": doc.firstName,
	    	 "lastName": doc.lastName,
	    	 "email": doc.email,
	    	 "phone": doc.phone,
	    	 "emailBest": doc.emailBest,
	    	 "cost": doc.cost,
	    	 "priority": doc.priority,
	    	 "startDate": doc.startDate,
	    	 "jobNotes": doc.jobNotes
	  
	    });
	  }
	};


sections

function(doc) {
	  if (doc._id.substr(0,8) ==="section:") {
	    emit(doc._id.substr(8), {
	    	 "_id":			doc._id,
	    	 "_rev":		doc._rev,
	    	 "title": 		doc.title,
	    	 "name":		doc.name,
	    	 "description": doc.description
	    });
	  }
	};
documents in couchDB

{
	   "_id": "JobGenie:project1",
	   "_rev": "2-758e9c325ae172ef2e2ee21d6d4ccb4c",
	   "projectType": "Kitchen",
	   "projectName": "Richter Kitchen",
	   "firstName": "Matthew",
	   "lastName": "Richter",
	   "email": "matt@gorichter.com",
	   "phone": "9085006304",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "9",
	   "startDate": "2012-5-1",
	   "jobNotes": "Re-due tile floor and add three new custom cabinets"
	}

{
	   "_id": "JobGenie:project10",
	   "_rev": "2-0f4830c47532fb2dad82c0ef8b355ecd",
	   "projectType": "Roof",
	   "projectName": "Roth Roof",
	   "firstName": "Joe",
	   "lastName": "Roth",
	   "email": "joe@roth.com",
	   "phone": "9085317283",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "6",
	   "startDate": "2012-9-1",
	   "jobNotes": "Roof over existing roof no dumpster required"
	}

{
	   "_id": "JobGenie:project11",
	   "_rev": "2-3182712ae8a5995676bcfbb1f44b5db2",
	   "projectType": "Lavatory",
	   "projectName": "Stires Lavatory",
	   "firstName": "Kim",
	   "lastName": "Stires",
	   "email": "kim@wfb.com",
	   "phone": "9084737272",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "8",
	   "startDate": "2012-8-1",
	   "jobNotes": "Gut the entire bathroom and replace everything"
	}

{
	   "_id": "JobGenie:project12",
	   "_rev": "2-0f7c0e93eef814e60eea80220874e116",
	   "projectType": "Addition",
	   "projectName": "Papio Addition",
	   "firstName": "Matthew",
	   "lastName": "Papio",
	   "email": "matt@papio.com",
	   "phone": "9736473829",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "7",
	   "startDate": "2012-6-1",
	   "jobNotes": "new floor:vanity and bath"
	}

{
	   "_id": "JobGenie:project13",
	   "_rev": "2-257b009bf7a5881d6cb558f7829e9bd6",
	   "projectType": "Basement",
	   "projectName": "Richter Basement",
	   "firstName": "James",
	   "lastName": "Dill",
	   "email": "james@dill.com",
	   "phone": "9732781166",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "5",
	   "startDate": "2012-10-1",
	   "jobNotes": "finish entire basement sheetrock and tile floor with built-ins"
	}

{
	   "_id": "JobGenie:project14",
	   "_rev": "2-77e641d563d731ff5dab4dc2294ee7eb",
	   "projectType": "Basement",
	   "projectName": "Kelly Basement",
	   "firstName": "Jeff",
	   "lastName": "Kelly",
	   "email": "jeff@kelly.com",
	   "phone": "9084738383",
	   "emailBest": "Yes",
	   "cost": "medium",
	   "priority": "5",
	   "startDate": "2012-11-1",
	   "jobNotes": "wine closet and sheetrock with cork floor"
	}

{
	   "_id": "JobGenie:project15",
	   "_rev": "2-404eed09fd7fcadbf9780ab6be3507b0",
	   "projectType": "Lavatory",
	   "projectName": "Richdale Lavatory",
	   "firstName": "John",
	   "lastName": "Richdale",
	   "email": "john@richdale.com",
	   "phone": "9734920098",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "4",
	   "startDate": "2012-12-1",
	   "jobNotes": "gut entire bathroom new everything with built-in tile shower and new vanity"
	}

{
	   "_id": "JobGenie:project16",
	   "_rev": "2-e9c5884fb880c583916bc3da6ccf0291",
	   "projectType": "Roof",
	   "projectName": "Hollis Roof",
	   "firstName": "Link",
	   "lastName": "Hollis",
	   "email": "link@hollis.com",
	   "phone": "9085006304",
	   "emailBest": "Yes",
	   "cost": "medium",
	   "priority": "9",
	   "startDate": "2012-7-1",
	   "jobNotes": "Tear off existing roof replace rotten wood + new gutters"
	}

{
	   "_id": "JobGenie:project17",
	   "_rev": "2-329814d67c97ea3e37bb614d8c9ce83a",
	   "projectType": "Kitchen",
	   "projectName": "Stires Kitchen",
	   "firstName": "Pete",
	   "lastName": "Stires",
	   "email": "pete@stires.com",
	   "phone": "9087776253",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "9",
	   "startDate": "2012-6-1",
	   "jobNotes": "all new cabinets conestoga doors and custom island"
	}

{
	   "_id": "JobGenie:project18",
	   "_rev": "3-72a16f9babac44549cdfd3e3d26dde5d",
	   "projectType": "Kitchen",
	   "projectName": "Mathis Kitchen",
	   "firstName": "Michael",
	   "lastName": "Mathis",
	   "email": "mike@mathis.com",
	   "phone": "9087223314",
	   "emailBest": "No",
	   "cost": "high",
	   "priority": "4",
	   "startDate": "2012-11-1",
	   "jobNotes": "all new cabinets and wine rack and tile floor"
	}

{
	   "_id": "JobGenie:project19",
	   "_rev": "2-d0b8da97da66074d05880925a47acaae",
	   "projectType": "Kitchen",
	   "projectName": "Long Kitchen",
	   "firstName": "Tom",
	   "lastName": "Long",
	   "email": "tom@long.com",
	   "phone": "9083764737",
	   "emailBest": "Yes",
	   "cost": "medium",
	   "priority": "7",
	   "startDate": "2012-8-1",
	   "jobNotes": "new doors and paint job"
	}

{
	   "_id": "JobGenie:project2",
	   "_rev": "2-1cc15b2fc433c64876dce048210797dc",
	   "projectType": "Addition",
	   "projectName": "Anderson Addition",
	   "firstName": "Chris",
	   "lastName": "Anderson",
	   "email": "chris@anderson.com",
	   "phone": "4075006304",
	   "emailBest": "Yes",
	   "cost": "medium",
	   "priority": "7",
	   "startDate": "2012-6-1",
	   "jobNotes": "600 sq ft addition of the family room"
	}

{
	   "_id": "JobGenie:project20",
	   "_rev": "2-94a9f6f76220ee0ad14eb42cf307e5ee",
	   "projectType": "Roof",
	   "projectName": "Monica Roof",
	   "firstName": "James",
	   "lastName": "Monica",
	   "email": "james@monica.com",
	   "phone": "9089874232",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "9",
	   "startDate": "2012-6-1",
	   "jobNotes": "Remove old roof & gutters"
	}

{
	   "_id": "JobGenie:project3",
	   "_rev": "2-a9b9510b1ab082e5394f3a7727e8f0d7",
	   "projectType": "Lavatory",
	   "projectName": "Richter Lavatory",
	   "firstName": "Matthew",
	   "lastName": "Richter",
	   "email": "matt@gorichter.com",
	   "phone": "9085006304",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "9",
	   "startDate": "2012-5-1",
	   "jobNotes": "Place new face-frame on the vanity and remove bench seat in shower and re-tile"
	}

{
	   "_id": "JobGenie:project4",
	   "_rev": "2-c866f35c6f8f729965daf1af932bba31",
	   "projectType": "Roof",
	   "projectName": "Stokes Roof",
	   "firstName": "Bryan",
	   "lastName": "Stokes",
	   "email": "bryan@SB.com",
	   "phone": "9086542727",
	   "emailBest": "Yes",
	   "cost": "medium",
	   "priority": "8",
	   "startDate": "2012-7-1",
	   "jobNotes": "Take off existing two layers and repair any rotten wood"
	}

{
	   "_id": "JobGenie:project5",
	   "_rev": "2-f745c61ae21a8a0a72d8f553322beace",
	   "projectType": "Basement",
	   "projectName": "Jones Basement",
	   "firstName": "Travis",
	   "lastName": "Jones",
	   "email": "traivs@jones.com",
	   "phone": "9088393933",
	   "emailBest": "Yes",
	   "cost": "low",
	   "priority": "4",
	   "startDate": "2012-6-1",
	   "jobNotes": "finish similar to the McKensie job"
	}

{
	   "_id": "JobGenie:project6",
	   "_rev": "2-362d340df526c10316c04520faf0e789",
	   "projectType": "Addition",
	   "projectName": "Trivella Addition",
	   "firstName": "Adrienne",
	   "lastName": "Trivella",
	   "email": "ade@trivella.com",
	   "phone": "9086372524",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "8",
	   "startDate": "2012-5-1",
	   "jobNotes": "400 square feet off the kitchen:tile floor anderson windows:match exterior"
	}

{
	   "_id": "JobGenie:project7",
	   "_rev": "2-4266fdcd87b3b242b23c1e536f0ef8a4",
	   "projectType": "Addition",
	   "projectName": "Oraschin Addition",
	   "firstName": "David",
	   "lastName": "Oraschin",
	   "email": "dave@oraschin.com",
	   "phone": "9086270412",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "10",
	   "startDate": "2012-7-1",
	   "jobNotes": "blow out family room wall and add 600 square foot great room:match exterior"
	}

{
	   "_id": "JobGenie:project8",
	   "_rev": "2-a7fe9fa0267cee304a7eedc65cc75d19",
	   "projectType": "Lavatory",
	   "projectName": "Mantes Lavatory",
	   "firstName": "Gerry",
	   "lastName": "Mantes",
	   "email": "gerry@mantes.com",
	   "phone": "9081232930",
	   "emailBest": "Yes",
	   "cost": "high",
	   "priority": "7",
	   "startDate": "2012-7-1",
	   "jobNotes": "new toilet:bath tub:vanity and shower"
	}

{
	   "_id": "JobGenie:project9",
	   "_rev": "2-fcc3d222e4a52c52e1f935e83561e5d3",
	   "projectType": "Lavatory",
	   "projectName": "Smith Lavatory",
	   "firstName": "John",
	   "lastName": "Smith",
	   "email": "john@smith.com",
	   "phone": "9082549986",
	   "emailBest": "Yes",
	   "cost": "low",
	   "priority": "6",
	   "startDate": "2012-8-1",
	   "jobNotes": "New shower tile and floor"
	}

{
	   "_id": "section:aaprojects",
	   "_rev": "3-962e5b071582cd8df7aef535b7f35bff",
	   "title": "projects",
	   "name": "All Projects",
	   "description": "all projects in the database"
	}

{
	   "_id": "section:additions",
	   "_rev": "2-211b62b2ad5d2d20f54c18614f3ed34a",
	   "title": "additions",
	   "name": "Additions",
	   "description": "cape to colonial, master bedroom, second story"
	}

{
	   "_id": "section:basements",
	   "_rev": "2-67d7a092e9192bd2b2300b119a183041",
	   "title": "basements",
	   "name": "Basements",
	   "description": "game room, extra kitchen, wine cellar, man cave"
	}

{
	   "_id": "section:kitchens",
	   "_rev": "2-d5c9646c0e200b6fc8a27adc0d83d6ec",
	   "title": "kitchens",
	   "name": "Kitchens",
	   "description": "cabinets, tile back splash, custom islands, counter tops"
	}

{
	   "_id": "section:lavatories",
	   "_rev": "2-864c0d217c408be8aabe58c4f075d0e7",
	   "title": "lavatories",
	   "name": "Lavatories",
	   "description": "bathrooms, vanities, tile showers, fixtures"
	}

{
	   "_id": "section:roofs",
	   "_rev": "2-a9fd1655156795fbac3f743b63d2852f",
	   "title": "roofs",
	   "name": "Roofs",
	   "description": "weather shielding, turrets, slate"
	}


