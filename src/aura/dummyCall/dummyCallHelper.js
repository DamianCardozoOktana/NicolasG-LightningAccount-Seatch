({
	makeHttpRequest : function(component) {
		var page = component.get('v.page'),
			perPage = component.get('v.perPage'),
			url = 'https://api.punkapi.com/v2/beers?page=' + page + '&per_page=' + perPage,
			xhttp = new XMLHttpRequest();

		var spinner = component.find("mySpinner");
        $A.util.toggleClass(spinner, "slds-hide");

		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var jsonResponse = JSON.parse(xhttp.responseText);
				component.set('v.elements', jsonResponse);
				$A.util.toggleClass(spinner, "slds-hide");
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}
})
