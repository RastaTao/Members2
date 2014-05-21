

model.User.password.onGet = function() {
	return "*******"
};


model.User.password.onSet = function(value) {
	this.hashKey = directory.computeHA1(this.phone, value);
};
