
function customLogin(userName,password)
	{
		
		var adminUser = ds.Admin.find("user==:1",userName);
		var user = ds.Organisation.find("user==:1",userName);
		var mobile = ds.User.find("phone==:1",userName);
		
		if (adminUser) {
			
				
				if(adminUser.validatePassword(password))
				{
						return {'ID':adminUser.ID,'name':adminUser.user,'fullName':adminUser.user,'belongsTo':['Administrator']};
						
				} else {
						return { error:1, errorMessage:'Password is incorrect'};
					   }
			   } 
		else if(user) {
			   					if(user.validatePassword(password))
								{
									return {'ID':user.ID,'name':user.user,'fullName':user.name,'belongsTo':['Organisation']}; 
								}else {
									  return { error:2, errorMessage:'Password is incorrect'};
									  }

					  }else if(mobile) {
			   					if(mobile.validatePassword(password))
								{
									return {'ID':mobile.ID,'name':mobile.phone,'fullName':mobile.name,'belongsTo':['Mobile']}; 
								}else {
									  return { error:3, errorMessage:'Password is incorrect'};
									  }

					  }else {
					   return { error:4, errorMessage:'User is incorrect'};
					        } {
					   return { error:5, errorMessage:'User is incorrect'};
					        }

		

	}
