({
	loadAllAccounts : function(component) {
		var action = component.get("c.findAll");
		action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === "SUCCESS") {
            component.set("v.accounts", response.getReturnValue());
        } else {
					// ERROR HANDLE
				}
    });
		$A.enqueueAction(action);
	},
	loadContactsFromAccount: function(component, accountId) {
		console.log('helper, search Contacts from: ' + accountId);
	}
})
