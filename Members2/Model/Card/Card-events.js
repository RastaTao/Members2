

model.Card.events.onSave = function() {
	var com = currentSession();
   var company = com.user.fullName;
   
     var theComp = ds.Organisation.find("name = :1", company);
     
     this.organisation = theComp;
};
