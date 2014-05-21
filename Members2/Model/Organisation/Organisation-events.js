


model.Organisation.password.onSet = function(value) {
	this.hashKey = directory.computeHA1(this.user, value);
};


model.Organisation.password.onGet = function() {
	return "*********"
};


model.Organisation.events.onRemove = function() {
	
	var members = ds.Member.query("orgName ==:1",this.name);
	
	for (var i=0; i<members.length; i++) {
		
		members[i].remove();
	
};

	var cards = ds.Card.query("organName ==:1",this.name);
	
	for (var i=0; i<cards.length; i++) {
		
		cards[i].remove();
	
};

	var events = ds.Event.query("orgName ==:1",this.name);
		
		for (var i=0; i<events.length; i++) {
			
			events[i].remove();
		
};
	
};
