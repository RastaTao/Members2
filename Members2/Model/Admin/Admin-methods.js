

model.Admin.entityMethods.validatePassword = function(password) {
	var ha1 = directory.computeHA1(this.user, password);
 	return (ha1 === this.hashKey);
};

model.Admin.entityMethods.validatePassword.scope = "public";