

model.Member.events.onSave = function() {
	var vUser = ds.User.find("phone ==:1",this.phone);
	this.user = vUser;
	
	var com = currentSession();
   var company = com.user.fullName;
   
     var theComp = ds.Organisation.find("name = :1", company);
     
     this.organisation = theComp;
     
     theCard = new ds.Card ({
             
             membership : this,
             organisation : theComp,
             paid : true        
             });
             theCard.save();
         theComp.currMebmers = theComp.currMebmers+1;
         theComp.save();
};


model.Member.events.onRemove = function() {
	var card = ds.Card.find("memberPhone ==:1 AND organName ==:2",this.phone,this.orgName);
	card.remove();
};
