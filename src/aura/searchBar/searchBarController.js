({
	searchAccounts : function(component, event, helper) {
		var searchTerm = component.get('v.searchTerm'),
			keyCode = event.getParams().keyCode,
			appEvent = $A.get("e.c:searchAccounts");

		if (searchTerm.length > 2 && keyCode == 13) {
			// ENTER and Search
			appEvent.setParams({"searchTerm" : searchTerm});
			appEvent.fire();
			appEvent = $A.get("e.c:clearContacts");
			appEvent.fire();
		}

		if (searchTerm.length == 0 && keyCode == 8) {
			appEvent.fire();
			appEvent = $A.get("e.c:clearContacts");
			appEvent.fire();

		}
	}
})
