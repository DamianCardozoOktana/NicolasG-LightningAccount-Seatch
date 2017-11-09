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
		helper.loadAllAccounts(component);
	},
	viewContactsFromAccount: function(component, event, helper) {
		console.log('viewContactsFromAccount');
		var accountId = event.target.dataset.account;
		if (accountId) {
			helper.loadContactsFromAccount(component, accountId);
		} else {
			// prevent calling Service without AccountID
		}
	},
	handleAccountSearch: function(component, event, helper) {
		console.log('handleAccountSearch');
		var term = event.getParam('searchTerm');
		console.log('Search for: ' + term)		
	}
})
