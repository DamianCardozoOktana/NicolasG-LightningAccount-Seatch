({
	handleContactsSearch: function(component, event, helper) {
		var accountId = event.getParam('accountID');
		helper.loadContacts(component, accountId);
	},
	handleClearContacts: function(component, event, helper) {		
		component.set("v.contacts", []);
	},
})