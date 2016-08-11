// Include React 
var React = require('react');

// Included all of the React Router dependencies
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = React.createClass({

	getInitialState: function(){
		return {
			test: ""
		}
	},

	// Here we render the component
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1>React NYT</h1>
						<p><em>Search for and annotate articles of interest</em></p>
					</div>

				</div>

{/*Added this.props.children to dump all of the child components into place*/}
						{this.props.children}
				
		</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Main;