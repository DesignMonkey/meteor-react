Frontpage = React.createClass({

  handleSubmit(e) {
  	e.preventDefault();
  	console.log(e);
  },

  handleInput(e) {
  	console.log(e);
  },

  render() {
    return <div>
      <h1>{this.props.headline}</h1>
      <form onSubmit={this.handleSubmit}>
      	<input type="text" onInput={this.handleInput} />
      </form>
    </div>
  }
});

