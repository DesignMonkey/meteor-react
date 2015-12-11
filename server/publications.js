
Meteor.publish('nav', function() {
	return Navigation.find();
})
