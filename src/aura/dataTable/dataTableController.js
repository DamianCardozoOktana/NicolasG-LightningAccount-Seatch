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
})
