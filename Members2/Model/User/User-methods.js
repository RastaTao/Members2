

model.User.entityMethods.validatePassword = function(password) {
	var ha1 = directory.computeHA1(this.phone, password);
 	return (ha1 === this.hashKey);
};

model.User.entityMethods.validatePassword.scope = "public";

model.User.methods.register = function(vPhone,vPassword) {
	
	var noUser = ds.User.find("phone ==:1",vPhone);
	debugger;
	if(!noUser)
	{
		
		var vUser = new ds.User({phone:vPhone,password:vPassword})
		vUser.save();
		
		var memQuery = ds.Member.query("phone ==:1",vPhone);
		
		if(memQuery){
		
		var qLen = memQuery.length;
		
		vUser.name = memQuery[0].lastName+" "+memQuery[0].firstName;
		vUser.save();
		
			for (var i=0; i<qLen; i++) {
				
				memQuery[i].addUser(vUser);
				//memQuery[i].save();
										};
										
				   };
		
	}
	
	
};

model.User.methods.register.scope = "public";