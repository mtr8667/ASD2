finction(doc) {
	if (doc._id.substr(0,9) === "JobGenie:"){
		emit(doc._id.substr(9), {
			"firstName": 	doc.firstName,
			"lastName": 	doc.lastName,
			"email": 		doc.email,
			"phone":		doc.phone
		});
	}	
	
};