

model.Admin.password.onGet = function() {
	return "***********************"
};


model.Admin.password.onSet = function(value) {
	this.hashKey = directory.computeHA1(this.user, value);
};
