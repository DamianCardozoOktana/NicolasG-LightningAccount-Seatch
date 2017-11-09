public with sharing class ContactsListController {
	@AuraEnabled
	public static List<Account> findAccounts(String searchKey) {
		if (searchKey != null) {
			String name = '%' + searchKey + '%';
			return [SELECT Id, Name, Site, BillingAddress, Phone, Type FROM Account WHERE name LIKE :name ];
		} else {
			return [SELECT Id, Name, Site, BillingAddress, Phone, Type FROM Account];
		}
	}

	@AuraEnabled
	public static List<Contact> findContactsByAccount(String accountID) {
		return [SELECT Name, Phone FROM Contact WHERE AccountId = :accountID ];
		// SELECT Name FROM Contact WHERE AccountId = '0011I000007sdnYQAQ'
	}
}
