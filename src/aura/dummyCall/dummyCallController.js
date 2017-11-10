({
	makeRequest : function(component, event, helper) {
		helper.makeHttpRequest(component);
	},
	prevPage: function(component, event, helper) {
		var prev = component.get('v.page');

		if (prev != 1) {
			prev--;
		}

		component.set('v.page', prev);
		helper.makeHttpRequest(component);
	},
	nextPage: function(component, event, helper) {
		var next = component.get('v.page'),
			lastPage = component.get('c.getLastPage');

		if (next != lastPage) {
			next++;
		}

		component.set('v.page', next);
		helper.makeHttpRequest(component);
	},
	getLastPage: function() {
		var perPage = component.get('v.perPage'),
			allItems = component.get('v.allItems'),
			lastPage = allItems/perPage;

		if (lastPage % 1 != 0) {
			lastPage++;
		}

		return lastPage;
	}
})
