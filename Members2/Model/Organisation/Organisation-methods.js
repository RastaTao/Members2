

model.Organisation.entityMethods.validatePassword = function(password) {
	var ha1 = directory.computeHA1(this.user, password);
 	return (ha1 === this.hashKey); //true if validated, false otherwise.
};

model.Organisation.entityMethods.validatePassword.scope = "public";


model.Organisation.methods.login.scope = "public";

model.Organisation.entityMethods.getName = function() {
	return this.name;
};
