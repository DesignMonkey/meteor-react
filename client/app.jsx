MainLayout = React.createClass({

  getDefaultProps() {
    return {
      pages: [
        {
          route: '/about',
          siteName: 'Om Nordlys'
        },
        {
          route: '/process',
          siteName: 'Proces'
        }

      ]
    };
  },

  isActiveRoute(route) {
    console.log(FlowRouter.current().route, route);
    return (FlowRouter.current().route.path == route.route) ? 'active' : '';
  },

  renderNavigation() {
  	return (
      <nav className="ui large secondary pointing menu">
        {
          this.props.pages.map((item, index) => {
            return <a key={index} className={'item ' + this.isActiveRoute(item)} href={item.route}>{item.siteName}</a>
          })
        }

      </nav>
    )
  },


  render() {
    return <div>
      <header>
        {this.renderNavigation()}
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
		let curId = FlowRouter.getParam('_id');
		return (
			<a className={'item' + (this.props._id == curId ? ' active' : '') } href={'/page/' + this.props._id}>{this.props.name}</a>
		);
	}
});

