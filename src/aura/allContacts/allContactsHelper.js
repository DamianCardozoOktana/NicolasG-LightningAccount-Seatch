({
	loadContacts : function(component, accountId) {
		var action = component.get("c.findContactsByAccount");

		action.setParams({"accountID" : accountId});
		action.setCallback(this, function(response) {
			var state = response.getState();			
			if (state === "SUCCESS") {
				component.set("v.contacts", response.getReturnValue());
			} else {
				// ERROR HANDLE
			}
		});
		$A.enqueueAction(action);
	}
})