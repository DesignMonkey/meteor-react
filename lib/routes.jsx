FlowRouter.route("/", {
  subscriptions: function() {
    this.register('nav', Meteor.subscribe('nav'));
  },
  action: function() {
		ReactLayout.render(MainLayout, {
		  content: <Frontpage id='' />
		})
  }
});

FlowRouter.route('/page/:_id', {
  name: 'post',
  subscriptions: function(params) {
    //this.register('singlePost', Meteor.subscribe('singlePost', params._id));
  },
  action: function(params) {
  	console.log(params._id)
  	let doc = Navigation.findOne(params._id);
  	console.log(doc)
		ReactLayout.render(MainLayout, {
		  content: <Dragging {...doc} />
		})
  }
});




