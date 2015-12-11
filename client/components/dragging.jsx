Dragging = React.createClass({

	getDefaultProps() {
	    return {
	        elems: ["Ape", "Monkey", "Gorilla", "Orangootang"]
	    };
	},

	componentDidMount() {
    let container = ReactDOM.findDOMNode(this);
    dragula([container]);
  },

	render() {
		return <div className="drag">
			{
				this.props.elems.map((elem, index) => {
					return <div key={index} className="dragElem">{elem}</div>
				})
			}
		</div>

	}

});



