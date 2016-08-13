// Include React 
var React = require('react');

var helpers = require('./utils/helpers.js');

var Results = React.createClass({



	// Here we render the component
	render: function(){

/*		helpers.getArticle().then(function(response){
			console.log(response);
		});*/

		return(

			<div className="row">

				<div className="col-lg-12">
					
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Results</h3>
						</div>
						<div className="panel-body">

						<button onClick={this.getData}>grab data</button>
						<p>{this.state.article}</p>

						</div>
					</div>

				</div>

			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;