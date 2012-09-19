function(doc) {
  if (doc._id.substr(0,4) ==="all:") {
    emit(doc._id.substr(4), {
    	 "_id":			doc._id,
    	 "_rev":		doc._rev,
    	 "title": 		doc.title,
    	 "name":		doc.name,
    	 "description": doc.description
    });
  }
};