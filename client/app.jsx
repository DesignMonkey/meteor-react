MainLayout = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      nav: Navigation.find({}).fetch()
    }
  },

  renderNavigation() {
  	 return this.data.nav.map((navItem) => {
      return <NavItem key={navItem._id} _id={navItem._id} name={navItem.name} />;
    });
  },

  render() {
    return <div>
      <header>
        <nav>
        	<ul>
        		{this.renderNavigation()}
        	</ul>
        </nav>
      </header>
      <main>
        {this.props.content}
      </main>
      <footer>
        This is our footer
      </footer>
    </div>
  }
});

NavItem = React.createClass({
	render() {
		return (
			<li className="nav-item">
				<a href={'/page/' + this.props._id}>{this.props.name}</a>
			</li>
		);
	}
});
