public with sharing class ContactsListController {
	@AuraEnabled
  public static List<Account> findAll() {
      return [SELECT Name, Site, BillingAddress, Phone, Type FROM Account];
  }

  @AuraEnabled
  public static List<Account> findByName(String searchKey) {
      String name = '%' + searchKey + '%';
      return [SELECT Name, Site, BillingAddress, Phone, Type FROM Account WHERE name LIKE :name ];
  }
}
