
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var passInput = {};	// @textField
	var button2 = {};	// @button
	var button1 = {};	// @button
	var textField2 = {};	// @textField
	var userInput = {};	// @textField
	var loginB = {};	// @button
	var signupB = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	passInput.keydown = function passInput_keydown (event)// @startlock
	{// @endlock
		if(($$("passInput").getValue()) == "password")
		{
			$$("passInput").setValue("");
		}
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
		var theUser = $$("userInput").getValue();
		var thePass = $$("passInput").getValue();
		debugger;
		var validUser = sources.user.query("phone ==:1",theUser);
		
				if (validUser) {
					
						$$("message").setValue("You already have an account");

					  } else {
					  	
					  			ds.User.register(theUser,thePass);
								$$("message").setValue("User created!");
		                     }

		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var theUser = $$("userInput").getValue();
		var thePass = $$("passInput").getValue();
		if(WAF.directory.loginByPassword(theUser, thePass))
		{

		window.location = "/cards/index-smartphone.html"
		
		}
		else {
			alert("MA TANK UR");
			  }
	};// @lock

	textField2.keydown = function textField2_keydown (event)// @startlock
	{// @endlock
		if(($$("passInput").getValue()) == "password")
		{
			$$("passInput").setValue("");
		}
	};// @lock

	userInput.keydown = function userInput_keydown (event)// @startlock
	{// @endlock
		if(($$("userInput").getValue()) == "phone")
		{
			$$("userInput").setValue("");
		}
	};// @lock

	loginB.click = function loginB_click (event)// @startlock
	{// @endlock
		$("#button1").show();
		$("#button2").hide();
		$("#signupB").css("background-color", "#7f7f7f");
		$("#signupB").css("color", "#999999");
		$("#loginB").css("background-color", "#4c4c4c");
		$("#loginB").css("color", "#157efa");
	};// @lock

	signupB.click = function signupB_click (event)// @startlock
	{// @endlock
		$("#button2").show();
		$("#button1").hide();
		$("#loginB").css("background-color", "#7f7f7f");
		$("#loginB").css("color", "#999999");
		$("#signupB").css("background-color", "#4c4c4c");
		$("#signupB").css("color", "#157efa");
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("passInput", "keydown", passInput.keydown, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("textField2", "keydown", textField2.keydown, "WAF");
	WAF.addListener("userInput", "keydown", userInput.keydown, "WAF");
	WAF.addListener("loginB", "click", loginB.click, "WAF");
	WAF.addListener("signupB", "click", signupB.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
