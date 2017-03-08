function AppViewModel() {
	this.firstName = "Tri";
	this.lastName = "Vi";
	//Define a computed value
	this.fullName = ko.computed(function() {
		return  this.firstName + " " + this.lastName;
	}, this);
}

//Activate Knockout.js
ko.applyBindings(new AppViewModel());