// Include React 
var React = require('react');

var helpers = require('./utils/helpers.js');

var Results = React.createClass({

	getInitialState: function(){
		return {
			article: []
		}
	},

	getData: function(){
		helpers.getArticle().then(function(response){
			console.log("sent article to results");
			console.log(response);

			this.setState({
				article: response.data[0].articles
			})

			
		}.bind(this));

	},

	// Here we render the component
	render: function(){

		return(

			<div className="row">

				<div className="col-lg-12">
					
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Results</h3>
						</div>
						<div className="panel-body">

						<a href="#/search"><button>Search</button></a>
						<button onClick={this.getData}>grab data</button>

						{this.state.article.map(function(search, i)
							{
								return <div className="well"><p key={i}>{search.lead_paragraph}</p></div> 
							}
						)}

						</div>
					</div>

				</div>

			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;