({
	init: function (component, event, helper) {
		// Load Dummy Data
		component.set('v.contacts', [
	            {name: 'Nicolas Gonzalez', email: 'nicolasglz@oktana.io', phone: '(650) 867-3450'},
				{name: 'Damian Cardozo', email: 'damian@oktana.io', phone: '(650) 867-3450'},
				{name: 'Manuel Iglesias', email: 'manueli@oktana.io', phone: '(650) 867-3450'},
				{name: 'Alejandro Sena', email: 'alejandros@oktana.io', phone: '(650) 867-3450'},
				{name: 'Marco Rodriguez', email: 'marco@oktana.io', phone: '(650) 867-3450'}
	        ]);
	}
})