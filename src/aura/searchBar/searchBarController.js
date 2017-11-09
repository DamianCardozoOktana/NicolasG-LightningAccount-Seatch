({
	searchAccounts : function(component, event, helper) {
		if (event.getParams().keyCode == 13) {
			var searchTerm = component.get('v.searchTerm');
			console.log('searchAccounts!!');
			console.log(searchTerm);
			var appEvent = $A.get("e.c:searchAccounts");
			appEvent.setParams({"searchTerm" : searchTerm});
			appEvent.fire();			
		}
	}
})
