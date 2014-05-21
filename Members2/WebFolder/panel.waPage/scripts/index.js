
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var idQueryString = {};	// @textField
	var cancel = {};	// @buttonImage
	var saveButton3 = {};	// @buttonImage
	var changeButton = {};	// @buttonImage
	var saveButton2 = {};	// @buttonImage
	var modifyButton = {};	// @buttonImage
	var saveButton = {};	// @buttonImage
	var addButton = {};	// @buttonImage
	var logoutB = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	idQueryString.keyup = function idQueryString_keyup (event)// @startlock
	{// @endlock
		var theName = $$("idQueryString").getValue();
		
		sources.organisation.query('name = :1 order by name', { params: ["*" + theName + "*"]});
		
	};// @lock

	cancel.click = function cancel_click (event)// @startlock
	{// @endlock
		$$("saveButton3").hide();
		$$("changeButton").show();
		$$("container3").show();
		$$("container2").hide();
		
		$$("addButton").enable();
		$$("modifyButton").enable();
		
	};// @lock

	saveButton3.click = function saveButton3_click (event)// @startlock
	{// @endlock
		var userName = $$("userText").getValue();
		var oldPass = $$("oldPassword").getValue();
		var newPass = $$("newPassword").getValue();
		var confPass = $$("confirmPassword").getValue();
		
	if(newPass == "")
	{
		$$("message").setValue("New password field is empty");
		$("#newPassword").css("color","#ff0000");
		$("#newPassword").css("border-color","#ff0000");
					
		function setMessage()
		{
			$$("message").setValue("");
		};
				
		setTimeout(setMessage,3000);
		
	} else{
		$("#newPassword").css("color","#4c4d54");
		$("#newPassword").css("border-color","#777985");
		if(newPass === confPass)
		{
			
			$("#confirmPassword").css("color","#4c4d54");
			$("#confirmPassword").css("border-color","#777985");
			
			if(sources.organisation.validatePassword(oldPass))
			{
				sources.organisation.password = newPass;
				sources.organisation.save();
				
				//sources.organisation.refresh();
				
				$$("saveButton3").hide();
				$$("changeButton").show();
				$$("container3").show();
				$$("container2").hide();
				
				$("#oldPassword").css("color","#4c4d54");
				$("#oldPassword").css("border-color","#777985");
				
				$$("addButton").enable();
				$$("modifyButton").enable();
				
			}else{
				
					$$("oldPassword").setValue("");
					$$("newPassword").setValue("");
					$$("confirmPassword").setValue("");
				
					$$("message").setValue("The old password didn't match!");
					$("#oldPassword").css("color","#ff0000");
					$("#oldPassword").css("border-color","#ff0000");
					
						function setMessage()
					{
					 $$("message").setValue("");
					};
				
					setTimeout(setMessage,3000);
				
				}
		
		} else{
					$$("oldPassword").setValue("");
					$$("confirmPassword").setValue("");
					
					$$("message").setValue("The password didn't match!");
					$("#confirmPassword").css("color","#ff0000");
					$("#confirmPassword").css("border-color","#ff0000");
					
						function setMessage()
					{
					 $$("message").setValue("");
					};
				
					setTimeout(setMessage,3000);
					
			  }	
		}	
	};// @lock

	changeButton.click = function changeButton_click (event)// @startlock
	{// @endlock
		$$("container3").hide();
		$$("container2").show();
		$("#container2").css("top","50px");
		$("#container2").css("left","494px");
		$("#container2").css("width","275px");
		$("#container2").css("height","280px");
		
		$$("saveButton3").show();
		$$("changeButton").hide();
		
		$$("oldPassword").setValue("");
		$$("newPassword").setValue("");
		$$("confirmPassword").setValue("");
		
		$$("addButton").disable();
		$$("modifyButton").disable();
		
	};// @lock

	saveButton2.click = function saveButton2_click (event)// @startlock
	{// @endlock
		$$("addButton").enable();
		$$("changeButton").enable();
		
		$$("saveButton2").hide();
		$$("modifyButton").show();
		$("#textField2").prop("readonly",true);
		$("#textField3").prop("readonly",true);
		$("#textField4").prop("readonly",true);
		$("#textField5").prop("readonly",true);
	};// @lock

	modifyButton.click = function modifyButton_click (event)// @startlock
	{// @endlock
		$$("addButton").disable();
		$$("changeButton").disable();
		
		$$("saveButton2").show();
		$$("modifyButton").hide();
		$("#textField2").prop("readonly",false);
		$("#textField3").prop("readonly",false);
		$("#textField4").prop("readonly",false);
		$("#textField5").prop("readonly",false);
	};// @lock

	saveButton.click = function saveButton_click (event)// @startlock
	{// @endlock
		$$("modifyButton").enable();
		$$("changeButton").enable();
		
		$$("saveButton").hide();
		$$("addButton").show();
		$("#textField2").prop("readonly",true);
		$("#textField3").prop("readonly",true);
		$("#textField4").prop("readonly",true);
		$("#textField5").prop("readonly",true);
		$("#textField6").prop("readonly",true);
		$("#textField7").prop("readonly",true);
	};// @lock

	addButton.click = function addButton_click (event)// @startlock
	{// @endlock
		$$("modifyButton").disable();
		$$("changeButton").disable();
		
		$$("saveButton").show();
		$$("addButton").hide();
		$("#textField2").prop("readonly",false);
		$("#textField3").prop("readonly",false);
		$("#textField4").prop("readonly",false);
		$("#textField5").prop("readonly",false);
		$("#textField6").prop("readonly",false);
		$("#textField7").prop("readonly",false);
	};// @lock

	logoutB.click = function logoutB_click (event)// @startlock
	{// @endlock
		WAF.directory.logout();
		window.location = "/index"
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
		sources.organisation.query("ID<0");
		$$("logoutB").setValue("Login");
		$$("container5").hide();

		var session = WAF.directory.currentUser();
		var currentName= session.fullName;


		if(currentName){
		$$("container5").show();

		sources.organisation.all();
		$$("welcomeText").setValue("Welcome "+session.fullName);
		$$("logoutB").setValue("Log out");
			
		}	
	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("idQueryString", "keyup", idQueryString.keyup, "WAF");
	WAF.addListener("cancel", "click", cancel.click, "WAF");
	WAF.addListener("saveButton3", "click", saveButton3.click, "WAF");
	WAF.addListener("changeButton", "click", changeButton.click, "WAF");
	WAF.addListener("saveButton2", "click", saveButton2.click, "WAF");
	WAF.addListener("modifyButton", "click", modifyButton.click, "WAF");
	WAF.addListener("saveButton", "click", saveButton.click, "WAF");
	WAF.addListener("addButton", "click", addButton.click, "WAF");
	WAF.addListener("logoutB", "click", logoutB.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
