({
	init: function (component, event, helper) {
		// Load Data Table Headers
		component.set('v.dataTableHeaders', [
	            {label: 'ACOUNT NAME', fieldName: 'accountName', type: 'text'},
	            {label: 'ACOUNT SITE', fieldName: 'accountSite', type: 'text'},
	            {label: 'BILLING STATE/PROVINCE', fieldName: 'billingAddress', type: 'text'},
	            {label: 'PHONE', fieldName: 'phone', type: 'phone'},
								{label: 'TYPE', fieldName: 'type', type: 'text'}
	        ]);

		// Firt load, load all Accounts
		helper.loadAccounts(component);
	},
	viewContactsFromAccount: function(component, event, helper) {		
		var accountId = event.target.dataset.account,
			appEvent = $A.get("e.c:searchContacts");

		if (accountId) {
			appEvent.setParams({"accountID" : accountId});
			appEvent.fire();
		} else {
			// prevent calling Service without AccountID
		}
	},
	handleAccountSearch: function(component, event, helper) {
		var term = event.getParam('searchTerm');
		helper.loadAccounts(component, term);
	}
})