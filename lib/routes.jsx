FlowRouter.route("/", {
  subscriptions: function() {
    this.register('nav', Meteor.subscribe('nav'));
  },
  action: function() {
		ReactLayout.render(MainLayout, {
		  content: <Frontpage />
		})
  }
});

FlowRouter.route("/about", {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <Dragging headline="about" />
    })
  }
});

FlowRouter.route("/process", {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <Dragging headline="Process" />
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
  	let doc = Pages.findOne(params._id);
  	console.log(doc)
		ReactLayout.render(MainLayout, {
		  content: <Dragging {...doc} />
		})
  }
});




