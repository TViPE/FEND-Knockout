function AppViewModel() {
	this.firstName = "Bert";
	this.lastName = "Berlington";
}

//Activate Knockout.js
ko.applyBindings(new AppViewModel());