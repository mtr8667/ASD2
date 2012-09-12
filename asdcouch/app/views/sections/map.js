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