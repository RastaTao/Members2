
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var rightMenu = {};	// @container
	var leftMenu = {};	// @container
	var centerMenu = {};	// @container
	var search = {};	// @textField
	var searchImg = {};	// @icon
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		
		var oldPass = $$("oldPass").getValue();
		var newPass = $$("newPass").getValue();
		var confPass = $$("confPass").getValue();
		
	if(newPass == "")
	{
		$$("message").setValue("New password is empty");
		$("#message").css("color","#ff0000");
		$("#message").css("font-size","15px");
		$("#newPass").css("color","#ff0000");
		$("#newPass").css("border-width","1px");
		$("#newPass").css("border-style","solid");
		$("#newPass").css("border-color","#ff0000");
					
		function setMessage()
		{
			$$("message").setValue("CHANGE PASSWORD");
			$("#message").css("font-size","20px");
			$("#message").css("color","#000000");
		};
				
		setTimeout(setMessage,3000);
		
	} else{
		$("#newPass").css("border-width","0px");
		$("#newPass").css("color","#000000");
		$("#newPass").css("border-color","#000000");
		if(newPass === confPass)
		{
			$("#confPass").css("border-width","0px");
			$("#confPass").css("color","#000000");
			$("#confPass").css("border-color","#000000");
			
			if(sources.user.validatePassword(oldPass))
			{
				sources.user.password = newPass;
				sources.user.save();
				
				$$("oldPass").setValue("");
				$$("confPass").setValue("");
				$$("newPass").setValue("");
				
				$("#oldPass").css("border-width","0px");
				$("#oldPass").css("color","#000000");
				$("#oldPass").css("border-color","#000000");
				
				$$("message").setValue("Change complete!");
				$("#message").css("color","#ff0000");
				$("#message").css("font-size","15px");
				
					function setMessage()
					{
					$$("message").setValue("CHANGE PASSWORD");
					$("#message").css("color","#000000");
					$("#message").css("font-size","20px");
					};
				
					setTimeout(setMessage,3000);
				
			}else{
				
					$$("oldPass").setValue("");
					$$("newPass").setValue("");
					$$("confPass").setValue("");
				
					$$("message").setValue("Wrong old password!");
					$("#message").css("color","#ff0000");
					$("#message").css("font-size","15px");
					$("#oldPass").css("color","#ff0000");
					$("#oldPass").css("border-color","#ff0000");
					
						function setMessage()
					{
					$$("message").setValue("CHANGE PASSWORD");
					$("#message").css("color","#000000");
					$("#message").css("font-size","20px");
					};
				
					setTimeout(setMessage,3000);
				
				}
		
		} else{
					$$("oldPass").setValue("");
					$$("confPass").setValue("");
					$$("newPass").setValue("");
					
					$$("message").setValue("No match!");
					$("#message").css("color","#ff0000");
					$("#message").css("font-size","15px");S
					$("#confPassw").css("color","#ff0000");
					$("#confPassw").css("border-color","#ff0000");
					
						function setMessage()
					{
					 $$("message").setValue("CHANGE PASSWORD");
					 $("#message").css("color","#000000");
					 $("#message").css("font-size","20px");
					};
				
					setTimeout(setMessage,3000);
					
			  }	
		}	
	};// @lock

	rightMenu.click = function rightMenu_click (event)// @startlock
	{// @endlock
		$("#rightMenu").css("border-width","1px");
		$("#rightMenu").css("border-style","inset");
		$("#rightMenu").css("border-color","#009342");
		
		
		$("#centerMenu").css("border-width","0px");
		$("#leftMenu").css("border-width","0px");
		
		$$("events").show();
		$$("walletContainer").hide();
		$$("profile").hide();
	};// @lock

	leftMenu.click = function leftMenu_click (event)// @startlock
	{// @endlock
		$("#leftMenu").css("border-width","1px");
		$("#leftMenu").css("border-style","inset");
		$("#leftMenu").css("border-color","#009342");
		
		
		$("#centerMenu").css("border-width","0px");
		$("#rightMenu").css("border-width","0px");
		
		$$("walletContainer").show();
		$$("events").hide();
		$$("profile").hide();
	};// @lock

	centerMenu.click = function centerMenu_click (event)// @startlock
	{// @endlock
//		window.location="/profile/index-smartphone.html"

		$("#centerMenu").css("border-width","1px");
		$("#centerMenu").css("border-style","inset");
		$("#centerMenu").css("border-color","#009342");
		
		
		$("#leftMenu").css("border-width","0px");
		$("#rightMenu").css("border-width","0px");

		$$("profile").show();
		$$("walletContainer").hide();
		$$("events").hide();
		
	};// @lock

	search.keyup = function search_keyup (event)// @startlock
	{// @endlock
		var theName = $$("search").getValue();
		
		var session = WAF.directory.currentUser();
		var currentName= session.userName;
		
		

		sources.card.query("organName== :1 AND memberPhone== :2", { params: ["*"+theName + "*",currentName]});
		
		
	};// @lock

	searchImg.click = function searchImg_click (event)// @startlock
	{// @endlock
		if($("#search").is(":visible"))
		{
			$$("search").hide();
		}else{
			$$("search").show();
			}
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
	WAF.sources.card.query("ID < 0");
		
		var session = WAF.directory.currentUser();
		var currentName= session.userName;
		
		
		
		
		if (currentName) {
						WAF.sources.card.query("memberPhone ==:1",currentName);
						WAF.sources.user.query("phone ==:1",currentName);
			      }

		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("rightMenu", "click", rightMenu.click, "WAF");
	WAF.addListener("leftMenu", "click", leftMenu.click, "WAF");
	WAF.addListener("centerMenu", "click", centerMenu.click, "WAF");
	WAF.addListener("search", "keyup", search.keyup, "WAF");
	WAF.addListener("searchImg", "click", searchImg.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
