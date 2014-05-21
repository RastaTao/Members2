

model.Member.entityMethods.addUser = function(user) {
	debugger;
	this.user = user;
	user.organisationList = this;
	this.save();
	user.save();


};
