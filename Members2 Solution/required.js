
var userLogin = function(username, password)

{
	
	if(username == "test")
	{
		return false; //revert to directory authentication
	} else {
		
				var adminUser = ds.Admin.find("user==:1",username);
				var user = ds.Organisation.find("user==:1",username);
				var mobile = ds.User.find("phone==:1",username);
				
				if(adminUser != null){
											if(adminUser.validatePassword(password))
											{
												return {'ID':adminUser.ID,'name':adminUser.user,'fullName':adminUser.user,'belongsTo':['Administrator']};
										 	}
									  }
									 
				if(user != null)
				{
						if(user.validatePassword(password))
							{
								return {'ID':user.ID,'name':user.user,'fullName':user.name,'belongsTo':['Organisation']};
							}
				}
					
					
				
				if(mobile != null)
				{
						if(mobile.validatePassword(password))
							{
								return {'ID':mobile.ID,'name':mobile.phone,'fullName':mobile.name,'belongsTo':['Mobile']}; 
							}
				}					  
								  

			}
}