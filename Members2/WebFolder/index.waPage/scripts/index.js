
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var passInput = {};	// @textField
	var userInput = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var theUser = $$("userInput").getValue();
		var thePass = $$("passInput").getValue();
		if(WAF.directory.loginByPassword(theUser, thePass))
		{
//			$$("loginContainer").hide();
//			$$("containerBody").show();
			
			
			
			if (WAF.directory.currentUserBelongsTo("Administrator")) {
				window.location = "/panel"
			} else if (WAF.directory.currentUserBelongsTo("Organisation")) {
				window.location = "/organisation"
			}

			
			//alert(session.belongsTo());
			
//			$$("welcomeText").setValue("Welcome to administration page, "+session.fullName+"!");
			
		}
		else {
			alert("Login failed");
			  }
	};// @lock

	passInput.keydown = function passInput_keydown (event)// @startlock
	{// @endlock
		if(($$("passInput").getValue()) == "password"){
		
			$$("passInput").setValue("");
		
		}
		
		if(event.keyCode == 13)
		{
			var theUser = $$("userInput").getValue();
			var thePass = $$("passInput").getValue();
		if(WAF.directory.loginByPassword(theUser, thePass))
		{
//			$$("loginContainer").hide();
//			$$("containerBody").show();
			
			
			
			if (WAF.directory.currentUserBelongsTo("Administrator")) {
				window.location = "/panel"
			} else if (WAF.directory.currentUserBelongsTo("Organisation")) {
				window.location = "/organisation"
			}

			
			//alert(session.belongsTo());
			
//			$$("welcomeText").setValue("Welcome to administration page, "+session.fullName+"!");
			
		}
		else {
			alert("Login failed");
			  }
		}
		
	};// @lock

	userInput.keydown = function userInput_keydown (event)// @startlock
	{// @endlock
		if(($$("userInput").getValue()) == "username"){
		
			$$("userInput").setValue("");
		
		}
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("passInput", "keydown", passInput.keydown, "WAF");
	WAF.addListener("userInput", "keydown", userInput.keydown, "WAF");
// @endregion
};// @endlock
