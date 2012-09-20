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