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

