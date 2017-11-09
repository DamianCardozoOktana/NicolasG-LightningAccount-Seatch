({
	loadAccounts : function(component, term) {
		var action = component.get("c.findAccounts");

		if (term) {
			action.setParams({"searchKey" : term});
		}

		action.setCallback(this, function(response) {
			var state = response.getState();
			if (state === "SUCCESS") {
				component.set("v.accounts", response.getReturnValue());
			} else {
				// ERROR HANDLE
			}
		});
		$A.enqueueAction(action);
	}	
})
