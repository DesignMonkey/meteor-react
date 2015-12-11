
Meteor.publish('nav', function() {
	return Pages.find();
})
