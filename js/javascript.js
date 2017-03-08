function AppViewModel() {
	this.firstName = ko.observable("Tri");
	this.lastName = ko.observable("Vi");
	//Define a computed value
	this.fullName = ko.computed(function() {
		return  this.firstName() + " " + this.lastName();
	}, this);
	this.capitalizeLastName = function() {
		var currentVal =  this.lastName();
		this.lastName(currentVal.toUpperCase());
	}
	this.capitalizeFirstName = function() {
		var currentVal = this.firstName();
		this.firstName(currentVal.toUpperCase());
	}
}

//Activate Knockout.js
ko.applyBindings(new AppViewModel());